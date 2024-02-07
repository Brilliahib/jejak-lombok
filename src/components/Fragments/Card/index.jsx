import { Link } from "react-router-dom";

function Card({ imageUrl, title, description, destination, mt }) {
  return (
    <Link to={destination}>
      <div className={`card mb-6 ${mt}`}>
        <img src={imageUrl} alt="Card" className="card-image rounded-xl" />
        <div className="card-content">
          <h6 className="font-bold text-2xl my-4">{title}</h6>
          <p className="text-justify text-[#6F6F6F]">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
