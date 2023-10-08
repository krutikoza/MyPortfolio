import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

function Experience(props) {
  const theme = props.theme;

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }

  
  return (
    <div className="experience-main" style={{backgroundColor: hexFromArgb(materialTheme.surfaceVariant), minHeight: "100vh"}}>
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="experience-content" style={{backgroundColor: hexFromArgb(materialTheme.surface), borderRadius: "30px"}}>
        <div className="basic-experience" >
          <Fade bottom duration={800} distance="40px" >
            <div className="experience-heading-div" >
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: hexFromArgb(materialTheme.onSurface) }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: hexFromArgb(materialTheme.onSurface) }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: hexFromArgb(materialTheme.secondary) }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      </div>
      <div className="footer">
      <Footer theme={props.theme} onToggle={props.onToggle} />
      </div>
    </div>
  );
}

export default Experience;
