import CssBaseLine from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { purpleTheme } from './';

export const AppTheme = ( {children} ) => {
  return (
   <ThemeProvider theme={ purpleTheme }>
    <CssBaseLine />
        { children }
   </ThemeProvider>
  )
}
