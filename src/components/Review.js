function Review(props) {
  return (
    <div className="review">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="opinion">
            <h4>{props.opinion}</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-md-3">
          <img className="ellipse" src={props.url} alt={props.alt}></img>
        </div>
        <div className="col-sm-8 col-md-9">
          <div className="introduce">
            <div className="name text-subtitle">{props.name}</div>
            <div className="job text-medium">{props.job}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
