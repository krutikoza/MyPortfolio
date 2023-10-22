import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";



import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

import '@material/web/iconbutton/filled-icon-button.js';





// import { argbFromHex, themeFromSourceColor, applyTheme, dynamicolor } from "@material/material-color-utilities";



// const theme = themeFromSourceColor(argbFromHex('#f82506'), [
//   {
//     name: "custom-1",
//     value: argbFromHex("#ff0000"),
//     blend: true,
//   },
// ]);
// // Print out the theme as JSON
// console.log(JSON.stringify(theme, null, 2));
// // Check if the user has dark mode turned on
// const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// // Apply the theme to the body by updating custom properties for material tokens
// applyTheme(theme, {target: document.body, dark: systemDark});





import '@material/web/iconbutton/icon-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/radio/radio.js';
import '@material/web/icon/icon.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';
import '@material/web/dialog/dialog.js';


import '@material/web/switch/switch.js';




function Theme(props) {
  const theme = props.theme;


  



  const [currTheme, setCurrTheme] = useState(props.theme);

  

  function changeTheme() {
    
    if (currTheme === "dark" || currTheme.name === "dark") {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    } else {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    }

    
  }

  const icon =
    props.theme.name === "light" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#FFFFFF" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#A7A7A7" : "#000000"}
      />
    );


    applyTheme(theme.themeTest, {target: document.body,  dark: theme.darkMode })

    if(theme.darkMode == true){
      var materialTheme = theme.themeTest.schemes.dark.props;
    }else{
      var materialTheme = theme.themeTest.schemes.light.props;
    }

    console.log(materialTheme)
  
 

   


  return (
    

        <div>
        <md-dialog id="usage-menu" style={{"--md-dialog-container-color": hexFromArgb(materialTheme.surfaceVariant)}}>

        <div slot="headline" style={{color: hexFromArgb(materialTheme.onSurfaceVariant)}}>
            Change Your Theme
        </div>

        <form slot="content" id="form-id" method="dialog" style={{textAlign: "center", padding:"30px"}}>
        <Sketch
                    style={{ 
                    "--sketch-background": "rgba(0, 0, 0, 0)",
                    "box-shadow": "0 0 0",
                    marginLeft: "10px"
                    }}

                    />

                
                
        <label>
                    DarkMode: 
                    
                    {props.theme.name == "dark"?
                    <md-switch 
                    selected

                    onClick={changeTheme}></md-switch>: 
                    <md-switch 
                    unselected 
                    
                    onClick={changeTheme}></md-switch>
                }

        </label>
                    {/* <md-switch 
                    
                    onClick={changeTheme}></md-switch> */}


        

                    

        </form>

        <div slot="actions">
            <md-text-button form="form-id">Ok</md-text-button>
        </div>

        </md-dialog>
        </div>

      

  );


  
}

export default Theme;
