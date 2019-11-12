import React, { createContext, Component } from 'react'

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {

    state = {
        isLightTheme: false,
        light: {bg: '#eee', color: '#000'},
        dark: {bg: '#555',  color: '#fff'}
    }

    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}