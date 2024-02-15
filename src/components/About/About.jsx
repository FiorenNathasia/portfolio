import "./About.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cube from "../cube/Cube";
import Techstack from "../techstack/Techstack";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView();
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
    <div className="about__container">
      <motion.div
        className="about__text"
        initial="initial"
        animate={inView ? "animate" : "initial"}
        ref={ref}
        variants={variants}
      >
        {inView && (
          <>
            <h1 className="about__title">About Me</h1>
            <p className="about__paragraph-one">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="about__paragraph-two">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="about__paragraph-three">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>
          </>
        )}
      </motion.div>

      <Cube />
      <Techstack />
    </div>
  );
};

export default About;
