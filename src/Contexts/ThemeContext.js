import React,{Component,createContext} from 'react';

export const ThemeContext=createContext()

class ThemeContextProvider extends Component{
    state={
        isDarkTheme:false,
        lightTheme:{
            background:"#FFFFFF",
            textcolor:"#000000"
        },
        darkTheme:{
            background:"#000000",
            textcolor:"#FFFFFF"
        },
    }
    render() {
        return(
            <ThemeContext.Provider value={{ ...this.state}}>
                {this.state.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider