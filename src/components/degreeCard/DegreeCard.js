import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";
import '@material/web/button/filled-button.js';

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }

  applyTheme(theme.themeTest, {target: document.body,  dark: theme.darkMode })

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: " 50%",
    padding: "5px",
    border: `1px solid ${hexFromArgb(materialTheme.outline)}`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px ${hexFromArgb(materialTheme.outline)}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${hexFromArgb(materialTheme.outline)}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid ${hexFromArgb(materialTheme.outline)}`,
    borderLeft: `1px solid ${hexFromArgb(materialTheme.outline)}`,
    borderRight: `1px solid ${hexFromArgb(materialTheme.outline)}`,
    borderRadius: theme.borderRadius,
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${hexFromArgb(materialTheme.outline)}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${hexFromArgb(materialTheme.outline)}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    // textDecoration: "none",
    // color: "rgba(255, 255, 255, 1)",
    // background: `${theme.accentColor}`,
    // padding: "15px 15px",
    // marginTop: "25px",
    // borderRadius: theme.borderRadius,
    // borderWidth: "0px",
    // marginBottom: "20px",
    // width: "200px",
    // height: "50px",
    // fontWeight: "bold",
    // fontFamily: "Google Sans Regular",
    // fontSize: "17px",
    // transition: "all 0.2s ease-in-out",
    // cursor: "pointer",
    // ":hover": {
    //   color: "rgba(255, 255, 255, 1)",
    //   boxShadow: `0 5px 10px ${hexFromArgb(materialTheme.shadow)}`,
    // },

    marginBottom: "20px"

  });

  return (
    <div className="degree-card">
      <Flip left duration={800}>
        <div {...style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(100%, 100%)",
            }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade right duration={800} distance="40px">
        <div {...card_body} style={{ backgroundColor: hexFromArgb(materialTheme.surface) }}>
          <div
            className="body-header"
            style={{ backgroundColor: hexFromArgb(materialTheme.surfaceVariant), borderRadius: theme.borderRadius +" " + theme.borderRadius +" " + theme.borderRadius +" " + theme.borderRadius}}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration" >
              <h3 className="duration" style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content" >
            {degree.descriptions.map((sentence) => {
              return (
                <p className="content-list" style={{ color:  hexFromArgb(materialTheme.onSurface) }}>
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <md-filled-button
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                  borderRadius: "100px"
                }}
              >
                Visit Website
              </md-filled-button>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
