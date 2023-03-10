import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload"

cloudinary.config({
    cloud_name: 'dtncshlhc',
    api_key:'485649989447626',
    api_secret:'Eiritu40UG9pOlxpaaMua4cjqTU',
    secure:true

})

describe('Pruebas en fileUpload ', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        //SUBE EL ARCHIVO A CLOUDINARY
        const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob],'fotoTest.jpg');
        const url = await fileUpload(file);
        //COMPROBACION DE QUE SE HA SUBIDO 
        expect( typeof url ).toBe('string');

        //ELIMINACION DEL ARCHIVO
        
        const segments = url.split('/');
        const imageId = segments[segments.length - 1 ].replace('.jpg' , '');

        const cloudResp = await cloudinary.api.delete_resources([ 'journal/'+ imageId ],{
            resource_type: 'image'
        })
       
     })

     test('Debe de retornar null' , async() =>{

        const file = new File([],'fotoTest.jpg');
        const url = await fileUpload(file);
        expect(  url ).toBe(null);

     })


 })