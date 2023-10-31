import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import ThemeComponent from "./theme";
import { GlobalStyles } from "./global";
import AnimatedCursor from "react-animated-cursor";
import { settings } from "./portfolio";
// import ReactGA from "react-ga";

const scrollbar = document.querySelector('::-webkit-scrollbar');


function App() {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const useCursor = settings.useCustomCursor;

  const themes = ThemeComponent();

  if (scrollbar) {
    // Set the element's style
    scrollbar.style.color = 'red';
  } else {
    // Handle the error
    console.error('The element #my-element does not exist.');
  }
  
  

  
  
  return (
    <ThemeProvider theme={theme == "dark"? themes.darkTheme : themes.lightTheme}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <>
              <AnimatedCursor
                innerSize={8}
                outerSize={30}
                color={theme === "dark" ? "219,226,249" : "86,94,113"}
                outerAlpha={0.4}
                innerScale={0.6}
                outerScale={0}
              />
              <Main theme={theme == "dark"? themes.darkTheme : themes.lightTheme} setTheme={setTheme} setThemeColor={themes.setThemeColor}/>
            </>
          ) : (
            <Main theme={theme == "dark"? themes.darkTheme : themes.lightTheme} setTheme={setTheme} setThemeColor={themes.setThemeColor}/>
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
