import CardComponent from "../CardComponent";
import "./section.css";
const Section = ({ title, data }) => {
  return (
    <div className="section">
      <h1 className="title">{title}</h1>
      <div className="card-container">
        {data.map((card) => (
          <CardComponent
            key={card.id}
            imgSrc={card.image}
            label={card.title}
            followersCount={card.follows}
          />
        ))}
      </div>
    </div>
  );
};
export default Section;
