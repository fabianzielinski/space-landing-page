// import Player from "./Player";

function InfoPlayer(props) {
  return (
    <div className="infoPlayer row">
      <div className="col-sm-12 col-md-6">
        <div className="siteLeft">{props.left}</div>
      </div>

      <div className="col-sm-12 col-md-6">
        <div className="siteRight">{props.right}</div>
      </div>
    </div>
  );
}

export default InfoPlayer;
