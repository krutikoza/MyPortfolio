import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import "./HomeComponent.css"

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

import { SchemeTonalSpot, Hct } from "@material/material-color-utilities";





function Home(props) {
  var theme = props.theme

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }

  const color = new SchemeTonalSpot(Hct.fromInt(12341234))
  console.log(color)

  
  return (
    <div style={{backgroundColor: hexFromArgb(materialTheme.secondaryContainer) , width: "100vw"}}>
      
      <Header theme={props.theme} setTheme={props.setTheme}  setThemeColor={props.setThemeColor} style={{zIndex:"1000"}}/>
      <div className="home-content" style={{backgroundColor: hexFromArgb(materialTheme.surface), borderRadius: "30px"}}>
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />      
      </div>
      
      <Footer theme={props.theme} />

      

      
    </div>
  );
}

export default Home;
