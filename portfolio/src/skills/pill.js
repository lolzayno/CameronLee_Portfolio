import './pill.css';

function Pill( {image, title} ) {
  return (
    <div className="pill-container">
        <img src={image} alt={title} className="image" />
        <h4>{title}</h4>
    </div>
  );
}

export default Pill;
