import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Style/card.css";

export default function Caado(props) {
  const { data } = props;
  return (
    <div className="card">
      <div className="image-container">
        <img variant="top" src={data.image} className="zurag" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <p>NOV 23 2020</p>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description.slice(0, 100)}</Card.Text>
        </div>
        <a href="#">Read more</a>
      </div>
    </div>
  );
}
