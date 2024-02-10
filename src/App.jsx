import "./App.scss";
import Navbar from "./components/NavBar/Navbar";

import Test from "./components/Test";

const App = () => {
  return (
    <>
      <div>
        <section>
          <Navbar />
        </section>
        <section>Skills</section>
        <section>My Projects</section>
        <section>Get In Touch With Me</section>
      </div>
      {/* <Test /> */}
      {/* <Test /> */}
    </>
  );
};

export default App;
