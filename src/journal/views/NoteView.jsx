import { SaveOutlined } from '@mui/icons-material'
import { Typography ,Grid ,Button, TextField} from '@mui/material'

import React from 'react'

import { ImageGalery } from '../components'

export const NoteView = () => {
  return (
    <Grid 
        className="animate__animated animate__fadeIn animate__faster"   
        container 
        direction="row" justifyContent="space-between" sx={{ mb:1 }}
    >
        <Grid item >
            <Typography fontSize={ 39 } fontWeight='light' >28 de agosto , 2023</Typography>
        </Grid>
        <Grid item >
            <Button color="primary" sx={{padding:2}}>
                <SaveOutlined sx={{ fontSize:30 ,mr:1}}></SaveOutlined>
                Guardar
            </Button>
        </Grid>
        <Grid container>

            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder='Ingrese un título'
                label="Título"
                sx={{ border: 'none', mb:1 }}>

            </TextField>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder='¿Qué sucedio en el dia de hoy?'
                minRows={ 5 }
                >
            </TextField>
            
            <ImageGalery/>
        </Grid>


    </Grid>
  )
}
