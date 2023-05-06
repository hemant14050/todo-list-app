import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ToggleTheme = ({theme, toggleThemeHandler}) => {
  return (
    <div className="toggle-theme">
        <DarkModeSwitch
        checked={theme === "dark-theme" ? true : false}
        onChange={toggleThemeHandler}
        />
    </div>
  )
}

export default ToggleTheme;
