import ButtonPrimary from "./ButtonPrimary";
import Slider from "./Slider";

function Hero(props) {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="caption">DESIGN INSPIRATION</div>
          <h1>Convallis turpis erat tempus, viverra aliquet.</h1>
          <ButtonPrimary name="Get In Touch" />
        </div>
        <div className="col-sm-12 col-md-6">
          <Slider url="images/slider-bg.jpg" alt="slider clock" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
