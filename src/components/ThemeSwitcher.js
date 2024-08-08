import React from "react";
import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";

const ThemeSwitcher = () => {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="theme-switch">
      <input type="checkbox" id="switch" onChange={switchTheme} />
      <label className="toggle-icons" htmlFor="switch">
        <img className="moon" src={moonIcon} alt="moon" />
        <img className="sun" src={sunIcon} alt="sun" />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
