import React, { Component } from 'react';
import {ThemeContext} from '../context/ThemeContext';

export default class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() {
        const {toggleTheme} = this.context;
        return (
            <div className="button-container">
                <button onClick={toggleTheme}>
                Tema Değiştir
                </button>
            </div>            
        )
    }
}
