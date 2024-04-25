import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import About from "../About/About";
import FadeSection from "../../shared/FadeSection/FadeSection";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import {GSHEET_API_URL} from "../../utils/const";

const Home = () => {
  const [githubLink, setGithubLink] = useState("https://github.com/KeyurChanchad");
  const [linkedinLink, setLinkedInLink] = useState("https://www.linkedin.com/in/keyur-chanchad-b5490b20b/");
  const [about, setAbout] = useState("");
  const [experienceTimeLineHeader, setExperienceTimeLineHeader] = useState("");
  const [BccEmail, setBccEmail] = useState("");
  const [ExperienceInfo, setExperienceInfo] = useState([
    {
      srNo: 1,
      JobRole: 'MERN stack developer',
      companyName: 'Rao information technology',
      startDate: 'December 2022',
      endDate: 'April 2024',
      Skills: ['React native', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB'],
      description:`
      As a key member of the development team at Rao Information Technology, I spearheaded the creation of a chat application reminiscent of WhatsApp, cutting-edge features including seamless audio and video calls, effortless media sharing, and robust end-to-end encryption for unparalleled privacy. Leveraging my expertise in React Native and Node.js, I led the design and implementation of the app's frontend and backend architecture, ensuring cross-platform compatibility and scalability. My contributions enabled users to experience a seamless communication experience, setting new standards for secure and intuitive mobile messaging platforms. This project showcases my ability to deliver innovative solutions in a fast-paced development environment, positioning Rao Information Technology at the forefront of technological advancement.`
    }
  ]);
  const [cvUrl, setCVUrl] = useState("");
  const [educationTitleHeader, setEducationTitleHeader] = useState("");
  const [educationInfo, setEducationInfo] = useState([
    {
      srNo: 1,
      degree: 'Master of Science in Information Technology (Msc.IT)',
      college: 'Department of Animation ITIMS (Gujarat University)',
      startDate: 'June 2022',
      endDate: 'May 2024'
    },
    {
      srNo: 2,
      degree: 'Bachelor of Computer Application  (BCA)',
      college: 'Somlalit Institute of Computer Application (Gujarat University)',
      startDate: 'June 2019',
      endDate: 'April 2022'
    },
    {
      srNo: 3,
      degree: 'HSC',
      college: 'Sahajanand vidhyadham (GSEB)',
      startDate: 'May 2018',
      endDate: 'March 2019'
    },
  ]);

  useEffect(() => {
    // const fetchResponse = async () => {
    //   try {
    //     const options = {
    //       url: GSHEET_API_URL,
    //       method: "GET",
    //     };
    //     const response = await axios(options);
    //     console.log(response, "response");
    //     if (response.data.data.length > 0) {
    //       // setGithubLink(response.data.data[0].Github);
    //       // setLinkedInLink(response.data.data[0].Linkedin);
    //       setAbout(response.data.data[0].About);
    //       setExperienceTimeLineHeader(response.data.data[0].ExperienceTimeLineTitle);
    //       setBccEmail(response.data.data[0].Email);
    //       setCVUrl(response.data.data[0].cvUrl);
    //       // setExperienceInfo(JSON.parse(response.data.data[0].Experience || "[]"));
    //       setEducationTitleHeader(response.data.data[0].EducationTitle);
    //       // setEducationInfo(JSON.parse(response.data.data[0].Education));
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // fetchResponse();
  }, []);
  return (
    <>
      <Header githubLink={githubLink} linkedinLink={linkedinLink} />
      <div className="body-wrapper">
        <About aboutDescription={about} cvUrl={cvUrl} />
        <FadeSection>
          <Experience experienceTimeLineHeader={experienceTimeLineHeader} ExperienceInfo={ExperienceInfo} />
          <Education educationTitleHeader={educationTitleHeader} educationInfo={educationInfo} />
          <Contact BccEmail={BccEmail} />
          <Footer githubLink={githubLink} linkedinLink={linkedinLink} />
        </FadeSection>
      </div>
    </>
  );
};

export default Home;
