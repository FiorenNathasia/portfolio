import "./Projectscard.scss";
import React, { useState } from "react";
import code from "../../assets/icons/code.png";

const ProjectsCard = ({ project }) => {
  return (
    <>
      <div className="projectscard">
        <video className="projectscard__video" src={project.video} controls />

        <div className="projectscard__textcontainer">
          <div className="projectscard__top">
            <h1 className="projectscard__title">{project.title}</h1>
            <a href={project.githubLink}>
              <img className="projectscard__code" src={code}></img>
            </a>
          </div>
          <p className="projectscard__text">{project.description}</p>
          <div className="projectscard__techstack">
            <div className="projectscard__position">
              <div className="projectscard__subtitle-wrap">
                <h3 className="projectscard__subtitle">Frontend</h3>
              </div>
              <div className="projectscard__list">
                <p className="projectscard__tech">{project.frontend}</p>
              </div>
            </div>

            <div className="projectscard__position">
              <div className="projectscard__subtitle-wrap">
                <h3 className="projectscard__subtitle">Backend</h3>
              </div>
              <div className="projectscard__list">
                <p className="projectscard__tech">{project.backend}</p>
              </div>
            </div>
            <div className="projectscard__position">
              <div className="projectscard__subtitle-wrap">
                <h3 className="projectscard__subtitle">APIs</h3>
              </div>
              <div className="projectscard__list">
                <p className="projectscard__tech">{project.apis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
