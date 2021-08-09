import { createTheme,ThemeProvider} from "@material-ui/core/styles"
import {CssBaseline} from '@material-ui/core'
import {createContext} from 'react'

const TemplateContext = createContext(null)

export const TemplateProvider=({children})=>{
    const theme = createTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:'unset'
                }
            },
            MuiDialogContent:{
                root:{
                    padding:0,
                    '&:first-child':{
                        paddingTop:0
                    }
                }
            }
        }

    })
    return(
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
                 {children}
            </ThemeProvider>
        </TemplateContext.Provider>

    )
}