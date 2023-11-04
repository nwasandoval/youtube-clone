import "./CardVideo.css";

export function CardVideo(props) {
  return (
    <div className="card-video">
      <div className="card-video__thumbnail">
        <img
          className="card-video__img"
          src={props.image}
          alt=""
          width="100%"
          height="100%"
        />
        <span className="card-video__duration">{props.duration}</span>
      </div>

      <div className="card-video__body">
        <img
          className="card-video__img-channel"
          src={props.channelImage}
          alt=""
          width="36"
          height="36"
        />

        <div className="card-video__information">
          <h3 className="card-video__title">{props.title}</h3>

          <p className="card-video__text">{props.channelName}</p>

          <div>
            <span className="card-video__text">{props.views}</span>
            <span className="card-video__text">{props.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
