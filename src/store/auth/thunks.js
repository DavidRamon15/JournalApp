import { useDispatch } from 'react-redux';
import { Login } from "@mui/icons-material";
import { singInWithGoogle, registerUserWithEmailPassword ,loginWithEmailPassword, logoutFirebase} from "../../firebase/providers";
import { checkingCredentials,logout,login } from "./authSlice";



export const checkingAuthentication = (email , password ) =>{

    return async(dispatch) =>{

        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () =>{
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        console.log({result});
        if( !result.ok ) return dispatch( logout(result.errorMessage) );

        dispatch( login( result ) )



    }
}

export const startCreatingUserWithEmailPassword = ({ email , password ,displayName }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() ); 

        const { ok, uid, photoURL, errorMessage }  = await registerUserWithEmailPassword({ email, password, displayName }) ;
        if(!ok ) return dispatch( logout({ errorMessage }) ) 

        dispatch( login({ uid, displayName,email, photoURL }) );
    }
}

export const startLoginWithEmailPassword = ({email, password}) =>{
     return async(dispatch) => {
        dispatch( checkingCredentials() ); 
        const { ok, uid, photoURL, errorMessage, displayName }  = await loginWithEmailPassword({ email, password }) ;
        if(!ok ) return dispatch( logout({ errorMessage }) ) 
        
        dispatch( login({ uid, email, displayName,photoURL }) );
     }
}

export const startLogout =() =>{
    return async(dispatch) =>{
        await logoutFirebase();
        dispatch( logout({}) );
    }
}