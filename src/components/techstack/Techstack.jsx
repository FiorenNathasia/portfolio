import "./Techstack.scss";
import Marquee from "react-fast-marquee";
import sass from "../../assets/icons/sass.svg";
import bem from "../../assets/icons/bem.svg";
import express from "../../assets/icons/express.svg";
import mysql from "../../assets/icons/mysql.svg";
import knex from "../../assets/icons/knex.svg";
import git from "../../assets/icons/git.svg";
import jira from "../../assets/icons/jira.svg";
import vscode from "../../assets/icons/vscode.svg";
import javascript from "../../assets/icons/javascript.svg";
import node from "../../assets/icons/nodejs.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import Techcard from "../techcard/Techcard";

const Techstack = () => {
  return (
    <>
      <section className="techstack">
        <div className="techstack__container">
          <Marquee
            pauseOnHover={true}
            speed={90}
            className="techstack__marquee"
          >
            <ul className="techstack__list">
              <Techcard techName="Javascript" techLogo={javascript} />
              <Techcard techName="React" techLogo={react} />
              <Techcard techName="Html" techLogo={html} />
              <Techcard techName="Css" techLogo={css} />
              <Techcard techName="Node.js" techLogo={node} />
              <Techcard techName="Sass" techLogo={sass} />
              <Techcard techName="BEM" techLogo={bem} />
              <Techcard techName="Express.js" techLogo={express} />
              <Techcard techName="MySQL" techLogo={mysql} />
              <Techcard techName="Knex.js" techLogo={knex} />
              <Techcard techName="Git" techLogo={git} />
              <Techcard techName="Jira" techLogo={jira} />
              <Techcard techName="Vscode" techLogo={vscode} />
            </ul>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Techstack;
