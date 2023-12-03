import "./CardComponent.css";
const CardComponent = ({ imgSrc, label, followersCount }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src={imgSrc} alt="card" />
        </div>
        <div className="card-content">
          <div className="card-content-pill">
            <p>{followersCount} Follows</p>
          </div>
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
};

export default CardComponent;
