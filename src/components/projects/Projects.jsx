import React, { useState } from "react";
import { motion } from "framer-motion";
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      frontend: "HTML5, CSS, SASS, JavaScript, React",
      backend: "NodeJS, Express.JS, Knex, MySql",
      apis: "none",
    },
    {
      title: "Loom",
      video: loom,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      frontend: "HTML5, CSS, SASS, JavaScript, React",
      backend: "NodeJS, Express.JS, Knex, MySql",
      apis: "none",
    },
    {
      title: "Demo",
      video: demo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      frontend: "HTML5, CSS, SASS, JavaScript, React",
      backend: "NodeJS, Express.JS, Knex, MySql",
      apis: "none",
    },
  ];

  const length = projects.length;

  const nextProject = () => {
    setCurrent((current + 1) % length);
  };

  const prevProject = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div className="projects">
      <h1 className="projects__title">My Projects</h1>
      <div className="projects__container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{
              opacity: index === current ? 1 : 0,
              x: index === current ? "0%" : "-100%",
            }}
            transition={{ duration: 0.5 }}
          >
            {index === current && <Projectscard project={project} />}
          </motion.div>
        ))}
        <div className="projects__buttons">
          <motion.button
            className="projects__arrow-left"
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
          >
            <img src={leftarrow} />
          </motion.button>
          <motion.button
            className="projects__arrow-right"
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
          >
            <img src={rightarrow} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
