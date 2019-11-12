import React, { Component } from 'react'
import {ThemeContext} from '../context/ThemeContext';

export default class Sidebar extends Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark
        return (
            <div className="sidebar" style={{background: theme.bg}}>
                <span style={{color: theme.color}}>Sidebar</span>
            </div>
        )
    }
}
