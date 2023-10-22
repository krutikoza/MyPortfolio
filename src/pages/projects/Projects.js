import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";
import '@material/web/button/filled-button.js';

function Projects(props) {
  const theme = props.theme;

  
  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }



  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main" style={{backgroundColor: hexFromArgb(materialTheme.surfaceVariant)}}>
      <Header theme={theme} setTheme={props.setTheme} setThemeColor={props.setThemeColor}/>
      <div className="projectContent" style={{backgroundColor: hexFromArgb(materialTheme.surface), borderRadius: "30px"}}>
        <div className="basic-projects" >
          <Fade bottom duration={800} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: hexFromArgb(materialTheme.onSurface) }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} />;
          })}
        </div>
        <br />
        <br />
        <br />
        <md-filled-button
          // {...styles}
          className="general-btn"
          href="https://github.com/krutikoza"
          // style={{borderRadius:"100px"}}
        >
          More Projects (Github)
        </md-filled-button>
        <br />
        <br />
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
