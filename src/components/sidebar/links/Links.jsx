import "/src/components/sidebar/links/Links.scss";
import { motion } from "framer-motion";
import linkedin from "../../assets/icons/Linkedin-logo-on-transparent--background-PNG.png";
import github from "../../assets/icons/github-logo.png";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "About Me", "My Projects", "Get In Touch"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          className="links__pages"
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            color: "initial",
            textDecoration: "initial",
          }}
          whileTap={{ scale: 0.95 }}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          {item}
        </motion.a>
      ))}
      <motion.div
        className="links__resume"
        variants={variants}
        whileHover={{
          scale: 1.1,
          color: "initial",
          textDecoration: "initial",
        }}
        whileTap={{ scale: 0.95 }}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <motion.a href="" variants={itemVariants}>
          My Resume
        </motion.a>
      </motion.div>
      <motion.div className="links__contact" variants={variants}>
        <motion.div className="links__subtitle" variants={itemVariants}>
          Contact Me
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            color: "initial",
            textDecoration: "initial",
          }}
          whileTap={{ scale: 0.95 }}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <motion.a
            href="mailto:fiorennathasia@gmail.com"
            className="links__email"
          >
            fiorennathasia@gmail.com
          </motion.a>
        </motion.div>
        <motion.div className="link__social" variants={itemVariants}>
          <motion.a href="https://www.linkedin.com/in/fiorennathasia/">
            <motion.img
              className="links__linkedin"
              src={linkedin}
              alt="linkedin"
              width="80"
              height="80"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.a>
          <motion.a href="https://github.com/FiorenNathasia">
            <motion.img
              className="links__github"
              src={github}
              alt="linkedin"
              width="70"
              height="70"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Links;
