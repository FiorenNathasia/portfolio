import "./Cube.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Cube = () => {
  return (
    <div className="cube__stagecont">
      <div className="cube__spinner">
        <div className="face1">
          <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#f06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faNode} color="#6cc24a" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faReact} color="#5edef4" />
        </div>
      </div>
    </div>
  );
};

export default Cube;
