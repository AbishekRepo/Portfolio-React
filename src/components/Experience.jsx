import { Timeline, Events, Event } from "vertical-timeline-component-react";
import experiences from "../data/experience.json";

const Experience = () => {
  const customTheme = {
    borderDotColor: "#ffffff",
    descriptionColor: "#fff",
    dotColor: "#d0cdc4",
    eventColor: "crimson",
    lineColor: "crimson",
    subtitleColor: "#7c7c7c",
    titleColor: "#fff",
    yearColor: "#fff",
  };

  return (
    <section className="experience-section">
      <h2 className="title experience">Experience</h2>
      <Timeline lang="en" theme={customTheme} dateFormat="short" collapse>
        {experiences.map((experience, index) => (
          <Events
            key={index}
            title={experience.CompanyName}
            subtitle={experience.subtitle}
            startDate={experience.startDate}
            endDate={experience.endDate ? experience.endDate : false}
            active={experience.currentlyWorking}
            defaultClosed
          >
            <Event title="show more" description={experience.description} />
          </Events>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
