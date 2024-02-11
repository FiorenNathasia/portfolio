import "./App.scss";
import Navbar from "./components/NavBar/Navbar";

import Test from "./components/Test";

const App = () => {
  return (
    <>
      <div>
        <section className="aboutme" id="Home">
          <Navbar />
        </section>
        <section id="About Me">About Me</section>
        <section id="My Projects">My Projects</section>
        <section id="Get In Touch">Get In Touch!</section>
      </div>
      {/* <Test /> */}
      {/* <Test /> */}
    </>
  );
};

export default App;
