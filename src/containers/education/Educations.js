import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

function Educations(props) {
  const theme = props.theme;

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={800} distance="20px">
          <h1 className="educations-header" style={{ color: hexFromArgb(materialTheme.onSurface) }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
