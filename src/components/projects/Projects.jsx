import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.scss";
import thrivevibe from "../../assets/video/ThriveVibeDemo.mp4";
import Projectscard from "../projectscard/Projectscard";
import leftarrow from "../../assets/icons/leftarrow.svg";
import rightarrow from "../../assets/icons/rightarrow.svg";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView();

  const projects = [
    {
      title: "ThriveVibe",
      video: thrivevibe,
      description:
        "ThriveVibe is a dynamic, game-changing platform designed to empower content creators on their journey to achieving quicker and more satisfying results. With the ever-increasing demand for fresh and engaging content, creators need timely, precise feedback to adapt and thrive in the digital landscape. ThriveVibe bridges this gap by offering a unique combination of real-time feedback and connection opportunities.",
      frontend: "HTML5, CSS, SASS, JavaScript, React",
      backend: "NodeJS, Express.JS, Knex, MySql",
      apis: "none",
      githubLink:
        "https://github.com/FiorenNathasia/fioren-nathasia-thrivevibe",
    },
  ];

  const length = projects.length;

  const nextProject = () => {
    setCurrent((current + 1) % length);
  };

  const prevProject = () => {
    setCurrent((current - 1 + length) % length);
  };

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="projects">
      <motion.h1
        initial="initial"
        animate={inView ? "animate" : "initial"}
        ref={ref}
        variants={variants}
        className="projects__title"
      >
        My Projects
      </motion.h1>
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
