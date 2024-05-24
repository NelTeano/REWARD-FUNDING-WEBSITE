'use client';
import { DM_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const sans = DM_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: sans.style.fontFamily,
    },
    breakpoints: {
        values: {
            xs: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;