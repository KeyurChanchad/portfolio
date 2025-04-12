import {Button, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import "./styles/about.css";
import {colors} from "../../theme/colors";
import {TypeAnimation} from "react-type-animation";

const About = ({aboutDescription, cvUrl}) => {
  const DownloadCV = () => {
    const pdfUrl = cvUrl || "https://drive.google.com/file/d/1C3VBWj_ofrCZZA72v_BV-mP2q3uQACba/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "KeyurChanchadSoftwareDeveloper.pdf"; // specify the filename
    document.body.appendChild(link);
    link.target = "_blank";
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Paper variant="about-bio-info" id='about'>
      <Grid container>
        <Grid item xs={12} md={6} lg={6} order={{xs: 2, md: 1, lg: 1}}>
          <Typography variant="greetingHeader" className="about-greeting-header">
            Hey, I am
            <br />
            Keyur Chanchad 🤙🏻
          </Typography>
          <div className="roles-wrapper">
            <Typography variant="roles">I am a</Typography>
            <div style={{color: '#64FFFF'}}>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Full Stack Developer",
                  1000,
                  "Software Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Problem Solver",
                  1000,
                  "Programmer",
                  1000,
                ]}
                speed={50}
                style={{fontSize: "2em"}}
                repeat={Infinity}
              />
            </div>
          </div>

          {/* <Typography variant="roles">I am a </Typography> */}
          <Typography variant="h4" sx={{color: colors.white, marginBottom: "42px !important"}}>
            {aboutDescription ||
              "With 2.5+ years of experience in MERN/PERN stacks, ReactJs, React Native, NodeJs, ExpressJs, MongoDB and PostgreSQL. I have a great ability to adapt to new challenges. I like to analyze problems and evaluate different solutions. I believe that organization is very important in order to achieve personal and professional goals efficiently. I build scalable web and mobile apps that bridge the gap between software and hardware. I thrive on turning complex workflows into intuitive, high-performance solutions."}
          </Typography>
          <Button variant="filled" onClick={DownloadCV}>
            Check CV
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6} order={{xs: 1, md: 2, lg: 2}} className="profile-pic-grid-wrapper">
          <div>
            {/* <img
              src="https://pedrorfpacheco.github.io/portfolio/static/media/PerfilPedroPacheco.0d7ddda3a293dcf979ac.jpg"
              alt="profile-pic"
              className="profile-image"
            ></img> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
