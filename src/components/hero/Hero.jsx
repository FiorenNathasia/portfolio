import "./Hero.scss";
import { motion } from "framer-motion";
import Sidebar from "/src/components/sidebar/Sidebar";

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <Sidebar />
      <div className="hero__wrapper">
        <motion.div
          className="hero__textcontainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="hero__h2" variants={textVariants}>
            Hi I'm Fioren Nathasia!
          </motion.h2>
          <motion.h1 className="hero__h1" variants={textVariants}>
            a Full-stack Software Engineer and Web Developer
          </motion.h1>

          <motion.div className="hero__slogan" variants={textVariants}>
            <motion.img
              className="hero__scroll"
              src="src/assets/scroll.png"
              variants={textVariants}
              animate="scrollButton"
            ></motion.img>
            <motion.h3 className="hero__h3" variants={textVariants}>
              I am a recent graduate of Brainstation’s Software Engineering
              Bootcamp in Dec 2023 and hope to pursue in a career in coding!
            </motion.h3>
          </motion.div>
        </motion.div>
        <div className="hero__imagecontainer">
          <img
            className="hero__headshot"
            src="/src/assets/headshot.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
