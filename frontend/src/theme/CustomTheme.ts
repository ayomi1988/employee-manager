import {createTheme, ThemeOptions} from '@mui/material';


export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light:'#2979ff',
            main: '#2979ff',
            dark: '#1c54b2'
        },
        background: {
            paper: '#ffffff',
            default: '#ffffff'
        },
    },
});