import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers/loadNote';
import { addNewEmptyNote,savingNewNote,setActiveNote, setNotes } from './journalSlice';


export const startNewNote = () =>{
    return async( dispatch, getState ) => {

        dispatch(savingNewNote());
        const { uid } = getState().auth;

         const newNote ={
            title: '',
            body: '',
            date:new Date().getTime(),
         }
        
         const newDoc = doc(collection( FirebaseDB, `${ uid }/journal/notes` ));

        const setDocResp = await setDoc( newDoc, newNote );
        
         newNote.id = newDoc.id;

         dispatch(addNewEmptyNote( newNote ));
        
         dispatch(setActiveNote( newNote ));

        //! dispatch
        // dispatch( newNote )
        // dispatch( activarNote )

    }
}

export const startLoagingNotes = () =>{
    return async( dispatch ,getState) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error("el Uid del Usuario no existe");
        
         const notes = await loadNotes( uid )
        dispatch(setNotes(notes));

    }
}

export const showNotes = () =>{
    return async( dispatch ,getState) => {
        const { uid } = getState().auth;
        dispatch(setActiveNote());

    }
}