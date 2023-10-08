import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
// import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

function Education(props) {
  const theme = props.theme;


  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }


  return (
    <div className="education-main" style={{backgroundColor: hexFromArgb(materialTheme.surfaceVariant)}}>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education" style={{backgroundColor: hexFromArgb(materialTheme.surface), borderRadius: "30px"}}>
        <Fade bottom duration={800} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: hexFromArgb(materialTheme.onSurface) }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: hexFromArgb(materialTheme.onSurface) }}>
                Basic Qualification
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: hexFromArgb(materialTheme.secondary) }}
              >
                I'm involved in tech-related activities like attending events,
                joining communities, and working on projects. Together with my
                education, this keeps me up-to-date and prepared for the
                challenges of the tech industry.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {/* <Certifications theme={props.theme} /> */}
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
