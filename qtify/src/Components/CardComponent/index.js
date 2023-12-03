import "./CardComponent.css";
import Tooltip from "@mui/material/Tooltip";

const CardComponent = ({ imgSrc, label, followersCount, numOfSongs }) => {
  return (
    <Tooltip
      title={numOfSongs ? `${numOfSongs} songs` : ""}
      placement="top"
      arrow
    >
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
    </Tooltip>
  );
};

export default CardComponent;
