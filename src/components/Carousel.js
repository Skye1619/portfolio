import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import facebook from "./image/facebook.png";
import "./homeCss.css";
import bootstrap from "./image/bootstrap.png";
import css from "./image/css-3.png";
import github from "./image/github.png";
import html from "./image/html.png";
import js from "./image/js.png";
import laravel from "./image/laravel.png";
import mui from "./image/mui.png";
import mysql from "./image/mysql.png";
import php from "./image/php.png";
import reac from "./image/science.png";
import mp1 from "./image/mp1.png";
import mp2 from "./image/mp2.png";
import capstone from "./image/capstone.png";
import { IconButton, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button } from "@mui/material";

function Carousel() {
  return (
    <div className="carouselRoot">
      <div id="carouselExampleFade" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active myItem">
            <div className="headerBody">
              <Button
                startIcon={<KeyboardDoubleArrowLeftIcon />}
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                Prev
              </Button>
              <Typography variant="h4" className="title1">
                Skills
              </Typography>
              <Button
                endIcon={<KeyboardDoubleArrowRightIcon />}
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                Next
              </Button>
            </div>
            <div className="skillIconContainer">
              <div className="icon">
                <img src={html} alt="Html icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  HTML5
                </Typography>
              </div>
              <div className="icon">
                <img src={css} alt="Css icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  CSS3
                </Typography>
              </div>
              <div className="icon">
                <img src={js} alt="Javascript icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Javascript
                </Typography>
              </div>
              <div className="icon">
                <img src={reac} alt="React icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  React.js
                </Typography>
              </div>
              <div className="icon">
                <img src={bootstrap} alt="Bootstrap icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Bootstrap
                </Typography>
              </div>
              <div className="icon">
                <img src={mui} alt="MaterialUI icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  MaterialUI
                </Typography>
              </div>
              <div className="icon">
                <img src={github} alt="Github icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Github
                </Typography>
              </div>
              <div className="icon">
                <img src={php} alt="Php icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  PHP
                </Typography>
              </div>
              <div className="icon">
                <img src={laravel} alt="Laravel icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Laravel
                </Typography>
              </div>
              <div className="icon">
                <img src={mysql} alt="MySql icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  MySql
                </Typography>
              </div>
            </div>
            <Typography variant="h5" className="title2">
              Bootcamp Projects
            </Typography>
            <div className="projectContainer">
              <a href="https://skye1619.github.io/MP1/" target="_blank">
                <div className="project">
                  <img src={mp1} alt="Mini Project-1" />
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      marginTop: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    Mini Project1
                  </Typography>
                </div>
              </a>
              <a
                href="https://trailer-movie-project.vercel.app/"
                target="_blank"
              >
                <div className="project">
                  <img src={mp2} alt="Mini Project-2" />
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      marginTop: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    Mini Project2
                  </Typography>
                </div>
              </a>
              <a href="https://capstone-9cmocnl2f-skye1619.vercel.app/home" target="_blank">
                <div className="project">
                  <img src={capstone} alt="Capstone Project" />
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      marginTop: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    Capstone Project
                  </Typography>
                </div>
              </a>
            </div>
          </div>
          <div className="carousel-item myItem">
            <div className="headerBody">
              <Button
                startIcon={<KeyboardDoubleArrowLeftIcon />}
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                Prev
              </Button>
              <Typography variant="h4" className="title1">
                Objective
              </Typography>
              <Button
                endIcon={<KeyboardDoubleArrowRightIcon />}
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                Next
              </Button>
            </div>
            <div
              style={{
                background: "#26216177",
                width: "80%",
                margin: "0 auto",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Typography variant="p" sx={{ textAlign: "center" }}>
                To work in a firm with a professional work driven environment
                where I can utilize and apply my knowledge and skills which
                would enable me to grow while fulfilling organizational goals.
              </Typography>
            </div>
            <Typography variant="h5" className="title2">
              Work Experience
            </Typography>
            <div className="workContainer">
              <div className="work">
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "#faae41" }}
                >
                  La Suerte Cigar and Cigarette Factory
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontSize: "small" }}
                >
                  Electrical and Electronic Technician
                </Typography>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "small",
                    margin: "0",
                  }}
                >
                  2020 - Present
                </p>
                <p className="responsibility">
                  Maintenance and Troubleshooting of Tabacco Machineries
                </p>
                <p className="responsibility">
                  Modifying and adding machine Features
                </p>
                <p className="responsibility">
                  Installation of Electrical Circuits
                </p>
              </div>
              <hr />
              <div className="work">
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "#faae41" }}
                >
                  Richburg Corporation (Fukuda)
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontSize: "small" }}
                >
                  Technician
                </Typography>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "small",
                    margin: "0",
                  }}
                >
                  2017 - 2020
                </p>
                <p className="responsibility">
                  Repair of appliances like LED Tv, Speakers, Dvd, and kitchen
                  appliances.
                </p>
                <p className="responsibility">
                  Home service Repair of appliances
                </p>
                <p className="responsibility">Quality Testing of appliances</p>
                <p className="responsibility">Office Maintenance</p>
              </div>
            </div>
          </div>
          <div className="carousel-item myItem">
            <div className="headerBody">
              <Button
                startIcon={<KeyboardDoubleArrowLeftIcon />}
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                Prev
              </Button>
              <Typography variant="h4" className="title1">
                Bio
              </Typography>
              <Button
                endIcon={<KeyboardDoubleArrowRightIcon />}
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                Next
              </Button>
            </div>
            <div className="infoContainer">
              <p>Birthday :</p>
              <p>June 16, 1996</p>
              <p>Nationality :</p>
              <p>Filipino</p>
              <p>Marital Status :</p>
              <p>Single</p>
            </div>
            <Typography variant="h5" className="title2">
              Education
            </Typography>
            <div className="educationContainer">
              <div className="education">
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "#faae41" }}
                >
                  Taguig City University
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontSize: "small" }}
                >
                  BS Industrial Technology major in Electronics
                </Typography>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "small",
                    margin: "0",
                  }}
                >
                  2013 - 2017
                </p>
                <hr />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "#faae41" }}
                >
                  Signal Village National HighSchool
                </Typography>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "small",
                    margin: "0",
                  }}
                >
                  2009 - 2013
                </p>
                <hr />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "#faae41" }}
                >
                  Balete Elementary School
                </Typography>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "small",
                    margin: "0",
                  }}
                >
                  2008 - 2009
                </p>
              </div>
            </div>
            <Typography variant="h5" className="title2">
              Credit
            </Typography>
            <div className="creditContainer">
              <div className="credit">
                <Typography variant="p">
                  Icons are made from{" "}
                  <a href="https://www.flaticon.com/" target="_blank">
                    Flaticon.com
                  </a>
                </Typography>
                <Typography variant="p">
                  The Design of this portfolio is made by Me.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
