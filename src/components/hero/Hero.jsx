import "./Hero.scss";
import Sidebar from "/src/components/sidebar/Sidebar";
const Hero = () => {
  return (
    <div className="hero">
      <Sidebar />
      <div className="hero__wrapper">
        <div className="hero__textcontainer">
          <h2 className="hero__h2">Hi I'm Fioren Nathasia!</h2>
          <h1 className="hero__h1">
            a Full-stack Software Engineer and Web Developer
          </h1>

          <div className="hero__slogan">
            <img className="hero__scroll" src="src/assets/scroll.png"></img>
            <h3 className="hero__h3">
              I am a recent graduate of Brainstation’s Software Engineering
              Bootcamp in Dec 2023 and hope to pursue in a career in coding!
            </h3>
          </div>
        </div>
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
