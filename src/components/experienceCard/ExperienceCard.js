import React from "react";
import "./ExperienceCard.css";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;


  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }


  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: hexFromArgb(materialTheme.secondaryContainer),
        borderRadius: theme.borderRadius
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: hexFromArgb(materialTheme.onSecondaryContainer) }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: hexFromArgb(materialTheme.onSecondaryContainer) }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: hexFromArgb(materialTheme.onSecondaryContainer) }}
        >
          {experience["description"]}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
