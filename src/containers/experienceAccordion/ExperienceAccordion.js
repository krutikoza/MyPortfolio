import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
// import { CgBorderAll } from "react-icons/cg";

const OVERRIDES = {
  Root: {
    styles: {
      CgBorderAll: "Radius300",
    },
  },
};

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider
        theme={theme.name === "light" ? LightTheme : DarkTheme}
        OVERRIDES={OVERRIDES}
      >
        <Accordion
          expanded={props.sections}
          onChange={({ expanded }) => console.log(expanded)}
        >
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
