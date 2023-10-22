import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
// import { useState } from "react";
import React, { useState } from "react";




const ThemeComponent = () => {

const [themeColor, setThemeColor] = useState(localStorage.getItem("accentColor") || "#03F0D4")

// localStorage.setItem("accentColor",themeColor)



const themeTest = themeFromSourceColor(argbFromHex(themeColor));





// Print out the theme as JSON
// console.log(JSON.stringify(themeTest, null, 2));

// Theme Presets

var lightTheme = {
  name: "light",
  body: "#FFFFFF",
  text: "#343434",
  dark: "#000000",
  secondaryText: "#8D8D8D",
  accentColor: "#adc7ff",
  accentBright: "#004493",
  projectCard: "#DCE4F2",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#cfd3da",
  imageClothes: "#c4bdfb",
  avatarMisc: "#b3a9fa",
  avatarShoes: "#ccd2e3",
  borderRadius: "30px",



  themeTest,
  darkMode:false


};

var darkTheme = {
  name: "dark",
  body: "#1D1D1D",
  text: "#FFFFFF",
  dark: "#000000",
  secondaryText: "#7F8DAA",
  accentColor: "#005bc0",
  accentBright: "#005bc0",
  projectCard: "#292A2D",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#676c77",
  imageClothes: "#000000",
  avatarMisc: "#000000",
  avatarShoes: "#2B2B2B",
  borderRadius: "30px",

  themeTest,
  darkMode:true
  
};

  const themes = { lightTheme, darkTheme, setThemeColor };
  return themes;

}

// export const themes = { light: MyComponent, dark: MyComponent.darkTheme };

export default ThemeComponent;



