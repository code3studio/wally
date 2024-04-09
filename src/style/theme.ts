import { createTheme } from "@mui/material";

export const theme = createTheme({
   breakpoints:{
    values:{
        xs: 0,
        sm: 760,
        md: 1300,
        lg: 1536,
        xl: 1918,
    }
   },
    typography:{
        fontFamily:'Bubblegum'
    },
    components:{
        MuiButton:{
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
              },
            styleOverrides:{
                root:{
                    background:' url("assets/svg/cloud.svg") center center no-repeat',
                    backgroundSize:'contain',
                    // width:100,
                    // height:70,
                    transition: 'transform 0.3s',
                    '&:hover':{
                        background:' url("assets/svg/cloud.svg") center center no-repeat',
                        backgroundSize:'contain',
                        transform: 'scale(1.4)',
                    }
                }
            }
        },
        MuiButtonBase:{
            styleOverrides:{
                root:{
                    fontSize:20,
                    textTransform:'capitalize',
                    textShadow:"-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;"
                }
            }
        },
        MuiContainer:{
            styleOverrides:{
                root:{
                    padding:0,
                    "@media(min-width:760px)":{
                        padding:0
                    }
                }
            }
        }
    },
    
})