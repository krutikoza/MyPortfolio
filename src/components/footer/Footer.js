import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

export default function Footer(props) {

  var theme = props.theme;

  applyTheme(theme.themeTest, {target: document.body,  dark: theme.darkMode })

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }


  return (
    <div className="footer-div" style = {{backgroundColor: hexFromArgb(materialTheme.surfaceVariant) , borderRadius:"0px"}}>
      <Fade>
        <p className="footer-text" style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}>
          Made with <span role="img">❤️</span> by {greeting.title2}
        </p>
      </Fade>
    </div>
  );
}
