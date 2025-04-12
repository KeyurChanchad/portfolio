import React from "react";
import Header from "../../components/Header/Header";
import About from "../About/About";
import FadeSection from "../../shared/FadeSection/FadeSection";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const githubLink = "https://github.com/KeyurChanchad";
  const linkedinLink = "https://www.linkedin.com/in/keyur-chanchad-b5490b20b/";
  const about = "";
  const experienceTimeLineHeader ="I started as a solo full-stack developer, crafting systems from scratch—frontend to database—and evolved into a team lead, mentoring developers and optimizing Agile processes. I'm dedicated to staying up-to-date with the latest technologies and best practices.";
  const BccEmail ="";
  const ExperienceInfo = [
    {
      srNo: 1,
      JobRole: 'Full stack developer',
      companyName: 'Digilize Solution',
      startDate: 'May 2024',
      endDate: 'Present',
      Skills: ['AWS basic', 'PostgreSQL', 'Prisma ORM', 'Microserices', 'NextJs', 'ReactJs', 'NodeJs', 'TailwindCss', 'Jest', 'Docker'],
      description:`
      I build scalable web and mobile apps that bridge the gap between software and hardware, specializing in batch manufacturing, tracking, and printing systems for industries like pharmaceuticals and food. Built Equality, a web app for pharmaceutical batch tracking, with e-signature audits and TCP/IP instrument communication. Developed Inspecta Trace, a label-printing system integrated with industrial printers (Domino/Videojet), cutting print errors by 30%. Created a React Native aggregation app that reduced re-renders by 80%, solving carton-mapping issues in warehouses. Led microservices in Node.js with PostgreSQL + Prisma, slashing API latency by 35% using Redis caching.`
    },
    {
      srNo: 2,
      JobRole: 'MERN stack developer',
      companyName: 'Rao information technology',
      startDate: 'December 2022',
      endDate: 'April 2024',
      Skills: ['React native', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB'],
      description:`
      As a key member of the development team at Rao Information Technology, I spearheaded the creation of a chat application reminiscent of WhatsApp, cutting-edge features including seamless audio and video calls, effortless media sharing, and robust end-to-end encryption for unparalleled privacy. Leveraging my expertise in React Native and Node.js, I led the design and implementation of the app's frontend and backend architecture, ensuring cross-platform compatibility and scalability. My contributions enabled users to experience a seamless communication experience, setting new standards for secure and intuitive mobile messaging platforms. This project showcases my ability to deliver innovative solutions in a fast-paced development environment, positioning Rao Information Technology at the forefront of technological advancement.`
    }
  ];
  const cvUrl ="https://drive.google.com/file/d/1C3VBWj_ofrCZZA72v_BV-mP2q3uQACba/view?usp=sharing";
  const educationTitleHeader ="";
  const educationInfo =[
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
  ];

  // useEffect(() => {
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
  // }, []);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Home;
