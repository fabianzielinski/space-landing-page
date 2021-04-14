function Gallery(props) {
  return (
    <section className="gallery">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-left">
          <img src={props.foto1} alt={props.alt1}></img>
        </div>
        <div className="col-sm-12 col-md-8 col-right">
          <div className="info">
            <h2>Requirements gathering and analysis for references.</h2>
            <div className="text text-large">
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
              tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
              malesuada a, duis volutpat.
            </div>
          </div>
          <img src={props.foto2} alt={props.alt2}></img>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
