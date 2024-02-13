import "./Navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => (
  <div className="navbar">
    <div className="navbar__wrapper">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar__temp">Fioren Nathasia</div>
      </motion.span>

      <div className="navbar__socials">
        <a href="#">
          <img src="" alt="" />
        </a>
        <a href="#">
          <img src="" alt="" />
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
