import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.css";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Ashish Roka",
  },

  {
    label: "Age",
    value: "20",
  },

  {
    label: "Address",
    value: "Bheerkot-3,Tisedi",
  },

  {
    label: "Email",
    value: "princeroka123@gmail.com",
  },
  {
    label: "Contact",
    value: "98********",
  },
];

const jobSummary =
  "Highly motivated and results-oriented CSIT student with 4 years of experience seeking a challenging entry-level position in the IT field. Eager to leverage strong technical skills in front end development and a passion for problem-solving to contribute to a dynamic team environment. Possess excellent communication and collaboration skills, and a continuous learner with a strong desire to expand knowledge and expertise in the ever-evolving IT landscape.";

const about = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="about me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-990px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
      </Animate>
        </div>
      </div>
    </section>
  );
};

export default about;
