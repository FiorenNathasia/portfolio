import "./App.scss";
import Navbar from "./components/NavBar/Navbar";
import Test from "./components/Test";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div>
      <section className="homepage" id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About Me" className="temporary">
        About Me
      </section>
      <section id="My Projects" className="temporary">
        My Projects
      </section>
      <section id="Get In Touch">
        <Contact />
      </section>
    </div>
  );
};

export default App;
