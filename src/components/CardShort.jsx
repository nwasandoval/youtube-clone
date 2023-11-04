import "./CardShort.css";

export function CardShort(props) {
  return (
    <div className="card-short">
      <img
        src={props.image}
        alt=""
        width="100%"
        height="380"
        className="card-short__image"
      />
      <h3 className="card-short__title">{props.title}</h3>
      <p className="card-short__text">{props.views}</p>
    </div>
  );
}
