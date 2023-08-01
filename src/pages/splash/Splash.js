import React, { useState } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        {/* <div class="ball"></div> */}
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 3000);

  return redirect ? (
    <Navigate to="/home" />
  ) : (
    <>
      <AnimatedSplash theme={props.theme} />
    </>
  );
}

export default Splash;
