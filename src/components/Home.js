import React from "react";
import myPic from "./image/pic.jpg";
import gmail from "./image/gmail.png";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";
import facebook from "./image/facebook.png";
import './homeCss.css'

import { Typography } from "@mui/material";
import Carousel from "./Carousel";

function Home() {
  

  const contactClick = (operation) => {
    if (operation === "gmail") {
      window.open(
        "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfXgVJFrdlsDjdJxVNzKFmTHFxvFjMztlQQGmzZdbmPFXLVPKTPvNczZQhLpdXPvgDnGW",
        "_blank"
      );
    }
    if (operation === 'linkedin') {
      window.open('https://www.linkedin.com/in/johnskyle-sebastian-621767271/', '_blank');
    }
    if (operation === 'github') {
      window.open('https://github.com/Skye1619', '_blank');
    }
    if (operation === 'facebook') {
      window.open('https://www.facebook.com/john.baste.735', '_blank');
    }
  };

  return (
    <div className="homeRoot">
      <div className="bodyHeader">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "170px",
          }}
        >
          <img src={myPic} alt="Profile Pic" className="profilePic" />
        </div>
        <Typography variant="h6" sx={{ marginTop: "12px", color: "#faae41" }}>
          Johnskyle G. Sebastian
        </Typography>
        <Typography variant="h6" sx={{ marginTop: "12px" }}>
          Contacts
        </Typography>
        <div className="contactsDiv">
          <img src={gmail} alt="G-mail" onClick={() => contactClick("gmail")} />
          <span onClick={() => contactClick("gmail")}>G-mail</span>
          <img
            src={linkedin}
            alt="LinkedIn"
            onClick={() => contactClick("linkedin")}
          />
          <span onClick={() => contactClick("linkedin")}>Linked In</span>
          <img
            src={github}
            alt="Github"
            onClick={() => contactClick("github")}
          />
          <span onClick={() => contactClick("github")}>Github</span>
          <img
            src={facebook}
            alt="Facebook"
            onClick={() => contactClick("facebook")}
          />
          <span onClick={() => contactClick("facebook")}>Facebook</span>
        </div>
        <Typography variant="p" sx={{fontStyle: 'italic', marginTop: '50px', fontSize: 'small'}} >
          Updated: 08/2023
        </Typography>
      </div>
      <div className="bodyMain">
        <div className="swipableBody" >
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
