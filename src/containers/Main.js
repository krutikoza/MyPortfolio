import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  
  if (settings.isSplash) {
    return (
      <div>
        {/* <HashRouter basename="/"> */}
          <Routes>
          
            <Route
              path="/"
              
              element={
                <Splash
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/experience"
              exact
              element={
                <Experience
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/education"
              element={
                <Education
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/splash"
              element={
                <Splash
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
          </Routes>
        {/* </HashRouter> */}
      </div>
    );
  } else {
    return (
      <div>
        {/* <HashRouter basename="/"> */}
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/experience"
              exact
              element={
                <Experience
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/education"
              element={
                <Education
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  {...propss}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  setThemeColor={propss.setThemeColor}
                />
              }
            />
          </Routes>
        {/* </HashRouter> */}
      </div>
    );
  }
}
