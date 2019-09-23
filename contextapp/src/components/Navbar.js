import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';


const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;


  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <div className="center">
        <h1>Context and Theme</h1>
        {<ThemeToggle />}
      </div>

      <ul>
        {isAuthenticated ? <li>Account settings</li> : null}
        {isAuthenticated ? <li onClick={toggleAuth}>Log out</li> : <li onClick={toggleAuth}>Log in</li>}
      </ul>
    </nav>
  );
}

export default NavBar;