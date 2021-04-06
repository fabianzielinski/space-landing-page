import ButtonPrimary from "./ButtonPrimary";

function Hero(props) {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h5>DESIGN INSPIRATION</h5>
          <h2>Convallis turpis erat tempus, viverra aliquet.</h2>
          <ButtonPrimary name="Get In Touch" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
