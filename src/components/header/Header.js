import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";

import {MdOutlineColorLens} from "react-icons/md"

import { style } from "glamor";



import { applyTheme, hexFromArgb } from "@material/material-color-utilities";

// import { SketchPicker } from 'react-color';

import ThemeComponent from "../../theme";



import '@material/web/iconbutton/icon-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/radio/radio.js';
import '@material/web/icon/icon.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';
import '@material/web/dialog/dialog.js';

import '@material/web/icon/icon.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/iconbutton/outlined-icon-button.js';
import '@material/web/iconbutton/icon-button.js';

import '@material/web/switch/switch.js';

import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';



// import { argbFromHex, themeFromSourceColor, applyTheme, dynamicolor } from "@material/material-color-utilities";

import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";










function Header(props) {
  const theme = props.theme;


  const { color, setColor, lightTheme, darkTheme } = ThemeComponent();
  


  const styles = style({
    // cursor: "pointer",
    // height: "45px",
    // width: "45px",
    // marginRight: "5px",
    // marginLeft: "15px",
    // paddingTop: "5px",
    // borderRadius: "50%",
    // border: "none",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: props.theme.name === "light" ? "#000000" : "#FFFFFF",
    // outline: "none",
    // transition: "all 0.2s ease-in-out",
    // ":hover": {
    //   boxShadow: `0 0px 10px ${
    //     props.theme.name === "light" ? "#646464" : "#FFFFFF"
    //   }`,
    // },



   

  });

  const link = settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    
    if (currTheme === "dark" || currTheme.name === "dark") {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
      // props.setThemeColor("#F6308E")
    } else {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
      // props.setThemeColor("#03F0D4")
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


    function changeThemeColor(color){

      // console.log(color)
      props.setThemeColor(color.hex)
      localStorage.setItem("accentColor", color.hex);
      
    }
  
 


  return (

    <Fade top duration={800} distance="20px">

    



      <md-dialog id="usage-menu" style={{"--md-dialog-container-color": hexFromArgb(materialTheme.surfaceVariant)}}>

      <div slot="headline" style={{color: hexFromArgb(materialTheme.onSurfaceVariant)}}>
        Change Your Theme
      </div>

      <form slot="content" id="form-id" method="dialog" style={{textAlign: "center", padding:"30px", alignItems: "center", paddingLeft: "25px"}}>
      
      <Sketch 
                style={{ 
                "--sketch-background": "rgba(0, 0, 0, 0)",
                "--compact-background-color": hexFromArgb(materialTheme.surfaceVariant),
                "box-shadow": "0 0 0",
                marginLeft: "10px",
                marginBottom: "30px",
        
                }}

                onChange={(color) => {
                  changeThemeColor(color)
                }}

                disableAlpha={true}
                editableDisable={false}

                color={localStorage.getItem("accentColor") || "#03F0D4"}



                />

      


              
              

              
                  {/* DarkMode:  */}

                  {/* <button {...styles} onClick={changeTheme}>
                {icon}
              </button> */}
                  
                  {props.theme.name == "dark"?
                  <md-switch 
                    selected
                    icons
                  onClick={changeTheme}></md-switch>
                  : 
                  <md-switch 
                  unselected 
                  icons
                  onClick={changeTheme}></md-switch>
                }

                
                  {/* <md-switch 
                  
                  onClick={changeTheme}></md-switch> */}

            


                

      </form>

      <div slot="actions" >
        <md-text-button form="form-id">Ok</md-text-button>
      </div>

      </md-dialog>




     

      <div>

        
        
        <header className="header" style={{ backgroundColor: hexFromArgb(materialTheme.secondaryContainer), borderRadius:"0px" }}>
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}></span>
            <span className="logo-name" style={{ color: hexFromArgb(materialTheme.onSecondaryContainer) }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" >
            <li>
              <NavLink
                className="homei"
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 20, color: hexFromArgb(materialTheme.onSurfaceVariant)  }}
                
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 20, color: hexFromArgb(materialTheme.onSurfaceVariant) }}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 20, color: hexFromArgb(materialTheme.onSurfaceVariant) }}
              >
                Experiences
              </NavLink>
            </li>
            
            <li>
              <NavLink
                className="projects"
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 20, color: hexFromArgb(materialTheme.onSurfaceVariant) }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 20, color: hexFromArgb(materialTheme.onSurfaceVariant) }}
              >
                Contact
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className="cr"
                to="/login"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 10, color: theme.text }}
              >
                Login
              </NavLink>
            </li> */}


            {/* <button {...styles} onClick={changeTheme}>
              {icon}
            </button> */}

            {/* <SketchPicker /> */}



            <md-filled-icon-button
                // {...styles}
                // onClick={changeTheme}

                style={{ marginTop: "4px"}}

                onClick={() => {
                  // const anchorEl = document.body.querySelector('#usage-anchor');
                  const menuEl = document.body.querySelector('#usage-menu');
                  menuEl.open = true;
              }}
              
                >
                <md-icon><MdOutlineColorLens></MdOutlineColorLens></md-icon>
              </md-filled-icon-button>
            


     


          </ul>
        </header>
      </div>
    </Fade>
  );


  
}

export default Header;
