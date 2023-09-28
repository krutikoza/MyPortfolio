import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
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
  
  return (
    <div className="experience-accord">
      <ThemeProvider
        theme={theme.name === "light" ? LightTheme : DarkTheme}
        //OVERRIDES={OVERRIDES}
      >
        <Accordion
           expanded={true}
          onChange={({ expanded }) => {console.log(expanded); }}
        
          overrides={{
            
            Header: {
              style: ({ $theme }) => ({
                borderRadius: theme.borderRadius
              })
            },
            Content: {
              style: ({ $theme }) => ({
                borderRadius: theme.borderRadius
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
