import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

// import { CgBorderAll } from "react-icons/cg";

// const OVERRIDES = {
//   Root: {
//     styles: {
//       CgBorderAll: "Radius300px",
      
//     },
//   },
// };

function ExperienceAccordion(props) {
  const theme = props.theme;

  const [expandedVal, setExpandedVal] = useState(true);

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }


  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  
  return (
    <div className="experience-accord"
     style={{
      borderRadius: theme.borderRadius, 
      border:`1px solid ${hexFromArgb(materialTheme.outline)}`,
      boxShadow: `${isHovered ? "0px 0px 30px 5px"+hexFromArgb(materialTheme.primary) : "0px 0px 5px 2px"+hexFromArgb(materialTheme.primary)}`
    }}

    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
     >

      <ThemeProvider
        theme={theme.name === "light" ? LightTheme : DarkTheme}
        //OVERRIDES={OVERRIDES}
      >
        <Accordion
           
          // onChange={({ expanded }) => {console.log(expanded); }}
        
          overrides={{
            
            Header: {
              style: ({ $theme }) => ({
                borderRadius: theme.borderRadius,
                backgroundColor: hexFromArgb(materialTheme.surface)
              })
            },
            Content: {
              style: ({ $theme }) => ({
                borderRadius: theme.borderRadius,
                backgroundColor: hexFromArgb(materialTheme.surface)
              })
            },
            PanelContainer: {
              style: ({ $theme }) => ({
                borderRadius: theme.borderRadius
              })
            },
          }}


          
        >
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                expanded={true}
              >
                <>


                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
                </>
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
