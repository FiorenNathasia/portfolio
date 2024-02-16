import React, { useState } from "react";
import "./Projects.scss";
import thrivevibe from "../../assets/video/ThriveVibeDemo.mp4";
import loom from "../../assets/video/ThriveVibeLoom.mp4";
import demo from "../../assets/video/Demo.mp4";
import Projectscard from "../projectscard/Projectscard";
import leftarrow from "../../assets/icons/leftarrow.svg";
import rightarrow from "../../assets/icons/rightarrow.svg";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "ThriveVibe",
      video: thrivevibe,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      frontend: "HTML5, CSS, SASS, JavaScript, React",
      backend: "NodeJS, Express.JS, Knex, MySql",
      apis: "none",
    },
    {
      title: "Loom",
      video: loom,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      frontend: "HTML5, CSS, SASS, JavaScript, React",
      backend: "NodeJS, Express.JS, Knex, MySql",
      apis: "none",
    },
    {
      title: "Demo",
      video: demo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      frontend: "HTML5, CSS, SASS, JavaScript, React",
      backend: "NodeJS, Express.JS, Knex, MySql",
      apis: "none",
    },
  ];

  const length = projects.length;
  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }
  return (
    <>
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <div
              className={index === current ? "project active" : "slide"}
              key={index}
            >
              {index === current && (
                <Projectscard project={project} index={index} />
              )}
            </div>
          );
        })}{" "}
        <div className="projects__buttons">
          {" "}
          <button className="projects__arrow-left" onClick={prevProject}>
            <img src={leftarrow} />
          </button>
          <button className="projects__arrow-right" onClick={nextProject}>
            <img src={rightarrow} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
