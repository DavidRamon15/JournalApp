import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link as RouterLink} from 'react-router-dom';
import { Grid, Typography ,TextField, Button, Link, Alert} from '@mui/material';
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startGoogleSignIn,startLoginWithEmailPassword} from '../../store/auth/';

const formData={
  email:"",
  password:'',
  
}

const formValidations ={
  email: [ (value) => value.includes('@')  , 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6  , 'El password debe de tener mas de 6 letras'],
  
}



export const LoginPage = () => {
  const dispatch = useDispatch();
  
  const {status,errorMessage} = useSelector( state => state.auth );
  
  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const { formState ,displayName, email, password , onInputChange} = useForm(formData,formValidations)


  const onSubmit =(event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword( formState ) );
  }

  const onGoogleSignIn = () =>{
    console.log("onGoogleSignIn");
    dispatch( startGoogleSignIn() );
  }

  return (

      <AuthLayout title="Login">
        <form aria-label="submit-form" onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
            <Grid container>
              <Grid item xs={ 12 } >
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder='correo@google.es'
                  fullWidth
                  name='email'
                  value={email}
                  onChange={onInputChange}>
                    
                </TextField>     
              </Grid>
              {/* Contraseña */}
              <Grid item xs={ 12 } sx={{ mt:2 }} >
                <TextField 
                  inputProps={{
                    'data-testid': 'password'
                  }}
                  label="Contraseña"
                  type="password"
                  placeholder='Contraseña'
                  fullWidth
                  name='password'
                  value={password}
                  onChange={onInputChange}>
                    
                </TextField>     
              </Grid>
              
              <Grid container  sx={{ mt:1}} display={ !!errorMessage ? '' : 'none'} >
                <Grid item xs={ 12 } >
                  <Alert severity='error' >
                  {errorMessage}
                  </Alert>  
                </Grid>
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb:2 , mt:1}} >
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button type='submit' variant="contained" fullWidth 
                    disabled={ isAuthenticating }
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant="contained" fullWidth  onClick={ onGoogleSignIn }  disabled={ isAuthenticating } aria-label="google-btn">
                    <Google/>
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>

              </Grid>
              <Grid container direction="row" justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
                
              </Grid>
            </Grid>
          </form>

      </AuthLayout>
          
  )
}
