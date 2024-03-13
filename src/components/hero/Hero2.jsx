import "./Hero2.scss";
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

// const textVariants = {
//   initial: {
//     x: 500,
//     opacity: 0,
//   },

//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
// };

const Hero2 = () => {
  return (
    <div className="hero">
      <Sidebar />
      <div className="hero2__wrapper">
        <img className="hero2__yellowarrow" src={yellowarrow}></img>
        <div className="hero2__textcontainer">
          <h2 className="hero2__h2">Hi I'm Fioren Nathasia!</h2>
          <h1 className="hero2__h1">
            a Full-stack Software Engineer and Web Developer
          </h1>
          <div className="hero2__slogan">
            <img
              className="hero2__scroll"
              src={scroll}
              //   variants={textVariants}
              //   animate="scrollButton"
            ></img>
            <h3 className="hero2__h3">
              I am a recent graduate of Brainstation’s Software Engineering
              Bootcamp in Dec 2023 aiming to pursue a career in coding!
            </h3>
          </div>
        </div>
        <div className="hero2__imagecontainer">
          <img className="hero2__yellowx" src={yellowx}></img>
          <img className="hero2__headshot" src={headshot}></img>
          <img className="hero2__whitebox" src={whitebox}></img>
          <img className="hero2__bluex" src={bluex}></img>
        </div>
      </div>
      <div className="hero2__imagecontainer2">
        <img className="hero2__headshot2" src={headshot}></img>
        <img className="hero2__whitebox2" src={whitebox}></img>
        <img className="hero2__bluecorner" src={bluecorner}></img>
      </div>
      <img className="hero2__bluearrow" src={bluearrow}></img>
      <img className="hero2__yellowcorner" src={yellowcorner}></img>
    </div>
  );
};

export default Hero2;
