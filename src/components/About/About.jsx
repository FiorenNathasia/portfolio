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
              Transitioning from a lifelong passion for visual arts to software
              engineering was a choice caused by a desire for a greater
              challenge. The constantly changing industry of technology
              interested me, pushing me to pursue it. Joining Brainstation's
              software engineering bootcamp marked the beginning of this new
              chapter.
            </p>
            <p className="about__paragraph-two">
              From my time as a textile designer, I bring skills like a keen eye
              for aesthetics, a focus on user-centered design, and a natural
              understanding of visual appeal. Additionally, the problem-solving
              skills from my time as a designer fit perfectly with the many
              challenges of software engineering, where innovative solutions are
              continuously needed to bring new ideas to life. This comprehensive
              perspective allows me to anticipate and address potential issues,
              highlighting my versatility and creativity as a full-stack
              developer.
            </p>
            <p className="about__paragraph-three">
              With a solid understanding of coding basics, I am driven by a
              strong desire for knowledge and excellence, laying a strong
              foundation for ongoing growth in the field of software
              engineering. I aim to continuously improve and learn more, fueled
              by the many opportunities and excitement in the tech industry. I
              am prepared to tackle any new challenge with determination,
              striving to surpass previous achievements and explore new
              possibilities along the way!
            </p>
          </>
        )}
      </motion.div>

      {/* <Cube /> */}
      <Techstack />
    </div>
  );
};

export default About;
