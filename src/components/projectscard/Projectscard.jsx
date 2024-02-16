import "./Projectscard.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectsCard = ({ project }) => {
  return (
    <>
      <div className="projectscard">
        <div></div>
        <video className="projectscard__video" src={project.video} controls />
        <div className="projectscard__textcontainer">
          <h1 className="projectscard__title">{project.title}</h1>
          <p className="projectscard__text">{project.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
