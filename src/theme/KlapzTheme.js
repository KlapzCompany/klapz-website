import { createTheme } from "@mui/material";
import { light, dark } from "./palette";

const palette = dark;

export const KlapzTheme = createTheme({
    palette: palette,
    breakpoints: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1280px',
        xl: '1920px'
    },
    typography: {
        h1: {
            fontSize: '64px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '54px',
        },
        h2: {
            fontSize: '56px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '44px'
        },
        h3: {
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '38px'
        },
        h4: {
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '32px'
        },
        h5: {
            fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '28px'
        },
        h6: {
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '22px'
        },
        lead: {
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '24px',
            letterSpacing: '2px'
        },
        link: {
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '.5px',
            textDecoration: 'none'
        },
        body1: {
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px'
        },
        body2: {
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px'
        },
        quotes: {
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '28px'
        },
        caps: {
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
        },
        small: {
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '14px'
        },
        tiny: {
            fontSize: '10px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '12px'
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                },
                ctaGradientOut: {
                    background: 'linear-gradient(#2C2C34, #2C2C34) padding-box, linear-gradient(to right top, #f39400, #ab5a9f, #00a6b8) border-box',
                    borderRadius: '50em',
                    border: '1px solid transparent',
                    transition: 'all ease .5s',
                    '&:hover': {
                        transition: 'all ease .5s',
                        background: 'linear-gradient(#2C2C34, #2C2C34) padding-box, linear-gradient(to right top, #f39400, #ab5a9f, #00a6b8) border-box',
                    }
                },
                ctaMonoOut: {
                    background: 'transparent',
                    borderRadius: '50em',
                    border: '1px solid rgba(255,255,255,.3)',
                    transition: 'all ease .5s',
                    '&:hover': {
                        transition: 'all ease .5s',
                        border: '1px solid rgba(255,255,255,1)',
                    }
                }
            }
        }
    }
});