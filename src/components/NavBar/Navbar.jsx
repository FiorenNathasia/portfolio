import Sidebar from "/src/components/sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Fioren Nathasia
        </motion.span>
        <Sidebar />
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
};

export default Navbar;
