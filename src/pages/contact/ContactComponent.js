import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

import '@material/web/button/filled-button.js';

import { applyTheme, hexFromArgb } from "@material/material-color-utilities";


const ContactData = contactPageData.contactSection;
// const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  },

  );


  applyTheme(theme.themeTest, {target: document.body,  dark: theme.darkMode })

  if(theme.darkMode == true){
    var materialTheme = theme.themeTest.schemes.dark.props;
  }else{
    var materialTheme = theme.themeTest.schemes.light.props;
  }

  return (
    <div className="contact-main" style={{backgroundColor: hexFromArgb(materialTheme.secondaryContainer)}}>
      <Header theme={theme} setTheme={props.setTheme} setThemeColor={props.setThemeColor}/>
      <div className="basic-contact" style={{backgroundColor: hexFromArgb(materialTheme.surface), borderRadius: "30px"}}>
        <Fade bottom duration={800} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
                style={{borderRadius: theme.borderRadius}} />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: hexFromArgb(materialTheme.onSurface) }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: hexFromArgb(materialTheme.onSurfaceVariant) }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <md-filled-button
                // {...styles}
                className="general-btn"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{borderRadius:"100px"}}
              >
                My Resume
              </md-filled-button>
            </div>
          </div>
        </Fade>
        {/* <Fade bottom duration={800} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  My Twitter Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade> */}
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
