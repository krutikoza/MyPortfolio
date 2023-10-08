import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";


export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: hexFromArgb(materialTheme.surfaceVariant),
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: theme.borderRadius,
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${hexFromArgb(materialTheme.primary)} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={800} distance="40px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
