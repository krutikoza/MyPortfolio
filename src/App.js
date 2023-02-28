import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import AnimatedCursor from "react-animated-cursor";
import { settings } from "./portfolio";
// import ReactGA from "react-ga";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
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
              <Main theme={themes[theme]} setTheme={setTheme} />
            </>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
