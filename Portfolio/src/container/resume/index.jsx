import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from "./utilis";
import "react-vertical-timeline-component/style.min.css";
import './styles.css'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="my resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="etimeline__experience-header">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className=" timeline-experience-verticalTimelineElement"
              >
                <div className="verticel-timeline-element-title-wrapper">
                  <h3 className="verticel-timeline-element-title">
                    {item.title}
                  </h3>

                  <h4 className="verticel-timeline-element-subtitle">
                    {item.subTitle}
                    <p>{item.description}</p>
                  </h4>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education-header">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, j) => (
              <VerticalTimelineElement
                key={j}
                className="timeline-education-verticalTimelineElement"
              >
                <div className="verticel-timeline-element-title-wrapper">
                  <h3 className="verticel-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="verticel-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
