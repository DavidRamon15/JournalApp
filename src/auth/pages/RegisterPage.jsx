import { useState,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink} from 'react-router-dom';
import { Grid, Typography ,TextField, Button, Link, Alert} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';


const formData={
  email:"davidramoncasanova98@gmail.com",
  password:'123456',
  displayName:'David Ramon'
}

const formValidations ={
  email: [ (value) => value.includes('@')  , 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6  , 'El password debe de tener mas de 6 letras'],
  displayName :[ (value) =>value.length >=1  , 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status , errorMessage } = useSelector(state => state.auth );

  const isCheckingAuthentication = useMemo( () => status ==='checking',[status]);


  const { 
    formState ,displayName , email, password , onInputChange ,
    isFormValid, displayNameValid, emailValid, passwordValid, } 
    = useForm( formData, formValidations);

    
    
  

  const onSubmit= (event) =>{
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return ;

    dispatch(startCreatingUserWithEmailPassword(formState));
    
  }
  return (

      <AuthLayout title="Register">
        <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
            <Grid container>
            <Grid item xs={ 12 } >
                <TextField 
                  label="Nombre completo"
                  type="text"
                  placeholder='Tu Nombre'
                  fullWidth
                  name="displayName"
                  value={ displayName }
                  onChange={onInputChange} 
                  error={ !!displayNameValid && formSubmitted }
                  helperText={displayNameValid}
                  >
                    
                </TextField>     
              </Grid>
              <Grid item xs={ 12 }  sx={{ mt:2 }} >
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder='correo@google.es'
                  fullWidth
                  name="email"
                  value={ email }
                  onChange={onInputChange}
                  error={ !!emailValid && formSubmitted }
                  helperText={emailValid}
                  >
                    
                </TextField>     
              </Grid>
              {/* Contraseña */}
              <Grid item xs={ 12 } sx={{ mt:2 }} >
                <TextField 
                  label="Contraseña"
                  type="password"
                  placeholder='Contraseña'
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={onInputChange}
                  error={ !!passwordValid  && formSubmitted }
                  helperText={passwordValid}
                  >
                    
                </TextField>     
              </Grid>
              
              <Grid container spacing={ 2 } sx={{ mb:2 ,mt:1}}>
                <Grid item xs={ 12 } display={!!errorMessage ? '' : 'none'}>
                  <Alert severity='error' >
                    {errorMessage}
                  </Alert>
                </Grid>
                <Grid item xs={ 12 }>
                  <Button variant="contained" fullWidth type='submit'
                  disabled={ isCheckingAuthentication } >
                    Create Account
                  </Button>
                </Grid>
               

              </Grid>
              <Grid container direction="row" justifyContent='end'>
                <Typography> ¿Ya tienes cuenta? </Typography>
                <Link component={ RouterLink } color='inherit' to="/auth/Login" sx={{ ml:1}}>
                  Ingresar
                </Link>
                
              </Grid>
            </Grid>
          </form>

      </AuthLayout>
          
  )
}
