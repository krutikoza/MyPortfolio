import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

export default function Skills(props) {
  const theme = props.theme;


  applyTheme(theme.themeTest, {target: document.body,  dark: theme.darkMode })

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }


  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={800} distance="20px">
          <h1 className="skills-header" style={{color: hexFromArgb(materialTheme.onSurface)}}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
