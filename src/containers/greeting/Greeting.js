import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";


import '@material/web/button/filled-button.js';

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";






export default function Greeting(props) {
  const theme = props.theme;
  const history = useNavigate();

  

  applyTheme(theme.themeTest, {target: document.body,  dark: theme.darkMode })

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }
  

  

  // const styles = style({
  //   backgroundColor: `${theme.accentBright}`,
  //   ":hover": {
  //     boxShadow: `0 5px 5px ${theme.accentBright}`,
  //   },
    
    
  // });

  return (
    <Fade bottom duration={800} distance="40px">
      <div className="greet-main" id="greeting" > 
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{color: hexFromArgb(materialTheme.onSurface)}}>{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span style={{color: hexFromArgb(materialTheme.onSurface)}}>I'm </span>
                <span style={{ color: hexFromArgb(materialTheme.primary) }}>
                  {greeting.full_name}.{" "}
                </span>
                <span style={{color: hexFromArgb(materialTheme.onSurface)}}>
                {greeting.subTitle}
                </span>
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <md-filled-button
                  // {...styles}
                  className="button"
                  onClick={() => {
                    history("/contact");
                  }}
                    
                >
                  Contact Me
                </md-filled-button>
                
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}