import "./Techcard.scss";

const Techcard = ({ techName, techLogo }) => {
  return (
    <li className="techcard">
      <div className="techcard__container">
        <img src={techLogo} alt={techName} className="techcard__logo" />
        <h3 className="technology__card-name">{techName}</h3>
      </div>
    </li>
  );
};

export default Techcard;
