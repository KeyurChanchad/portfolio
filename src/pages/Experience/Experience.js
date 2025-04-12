import {Grid, Typography} from "@mui/material";
import React from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import "./styles/experience.css";
import TimeLine from "../../components/TimeLine/TimeLine";
import FadeSection from "../../shared/FadeSection/FadeSection";

const Experience = ({experienceTimeLineHeader, ExperienceInfo}) => {
  return (
    <div className="experience-grid-wrapper" id="experience">
      <div className="experience-grid-container">
        <Grid container>
          <Grid xs={3} item />
          <Grid xs={6} item>
            <div className="experience-title-wrapper">
              <Typography variant="experienceHeader">Experience</Typography>
              <Typography className="experience-description" variant="experienceCardDescription">
                {experienceTimeLineHeader}
              </Typography>
            </div>
            {ExperienceInfo.map((ExperienceCardItem) => (
              <FadeSection>
                <TimeLine
                  Content={
                    <ExperienceCard
                      cardTitle={ExperienceCardItem.JobRole}
                      cardSubtitle={ExperienceCardItem.companyName}
                      cardDuration={`${ExperienceCardItem.startDate} - ${ExperienceCardItem.endDate}`}
                      cardBody={{skillList: ExperienceCardItem.Skills, description: ExperienceCardItem.description}}
                    />
                  }
                />
              </FadeSection>
            ))}
          </Grid>
          <Grid xs={3} item />
        </Grid>
      </div>
    </div>
  );
};

export default Experience;
