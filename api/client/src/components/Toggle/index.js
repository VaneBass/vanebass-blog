import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import StyledToggle from "./style";

function Toggle({ theme, toggleTheme }) {
  return (
    <StyledToggle onClick={toggleTheme} title="切换主题">
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="lg" />
      )}
    </StyledToggle>
  );
}

export default Toggle;
