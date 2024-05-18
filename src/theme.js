'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    breakpoints: {
        values: {
            xs: 420,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;