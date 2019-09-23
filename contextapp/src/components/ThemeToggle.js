import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <input type="checkbox" id="switch" onClick={toggleTheme} />Light/Dark mode<label for="switch"></label>
        </div>
    );
}

export default ThemeToggle;