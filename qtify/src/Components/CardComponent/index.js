import "./CardComponent.css";
export default ({ imgSrc, label, followersCount }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src={imgSrc} />
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
