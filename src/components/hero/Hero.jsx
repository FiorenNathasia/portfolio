import "./Hero.scss";
import { motion } from "framer-motion";
import Sidebar from "/src/components/sidebar/Sidebar";
import yellowarrow from "../../assets/decorations/yellowarrow.svg";
import yellowcorner from "../../assets/decorations/yellowcorner.svg";
import whitebox from "../../assets/decorations/whitebox.svg";
import yellowx from "../../assets/decorations/yellowx.svg";
import bluex from "../../assets/decorations/bluex.svg";
import bluearrow from "../../assets/decorations/bluearrow.svg";
import bluecorner from "../../assets/decorations/bluecorner.svg";
import headshot from "../../assets/headshot.png";
import scroll from "../../assets/decorations/scroll.png";

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
        <img className="hero__yellowarrow" src={yellowarrow}></img>
        <img className="hero__yellowcorner" src={yellowcorner}></img>
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
          <motion.img
            className="hero__scroll-mobile"
            src="src/assets/decorations/scroll.png"
            variants={textVariants}
            animate="scrollButton"
          ></motion.img>

          <motion.div className="hero__slogan" variants={textVariants}>
            <motion.img
              className="hero__scroll"
              src={scroll}
              variants={textVariants}
              animate="scrollButton"
            ></motion.img>
            <motion.h3 className="hero__h3" variants={textVariants}>
              I am a recent graduate of Brainstation’s Software Engineering
              Bootcamp in Dec 2023 aiming to pursue a career in coding!
            </motion.h3>
          </motion.div>
        </motion.div>
        <img className="hero__whitebox" src={whitebox}></img>

        <div className="hero__imagecontainer">
          <img className="hero__yellowx" src={yellowx}></img>
          <img className="hero__bluex" src={bluex}></img>
          <img className="hero__bluecorner" src={bluecorner}></img>
          <img className="hero__headshot" src={headshot}></img>
        </div>
        <img className="hero__bluearrow" src={bluearrow}></img>
      </div>
    </div>
  );
};

export default Hero;
