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
import Techcard from "../techcard/Techcard";

const Techstack = () => {
  return (
    <>
      <section className="techstack">
        <div className="techstack__container">
          <Marquee
            pauseOnHover={true}
            speed={80}
            className="techstack__marquee"
          >
            <ul className="techstack__list">
              <Techcard techName="Sass" techLogo={sass} />
              <Techcard techName="BEM" techLogo={bem} />
              <Techcard techName="Express.js" techLogo={express} />
              <Techcard techName="MySQL" techLogo={mysql} />
              <Techcard techName="Knex.js" techLogo={knex} />
              <Techcard techName="Git" techLogo={git} />
              <Techcard techName="Jira" techLogo={jira} />
              <Techcard techName="Vscode" techLogo={vscode} />

              <Techcard techName="Sass" techLogo={sass} />
              <Techcard techName="BEM" techLogo={bem} />
              <Techcard techName="Express.js" techLogo={express} />
              <Techcard techName="MySQL" techLogo={mysql} />
              <Techcard techName="Knex.js" techLogo={knex} />
              <Techcard techName="Git" techLogo={git} />
              <Techcard techName="Jira" techLogo={jira} />
            </ul>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Techstack;
