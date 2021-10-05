import Navigation from "./Navigation";
import ButtonPrimary from "./ButtonPrimary";
import Slider from "./Slider";
import Review from "./Review";

function Hero(props) {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <Navigation />
        </div>
      </div>
      <div className="title row">
        <div className="col-sm-12 col-md-7">
          <div className="caption">DESIGN INSPIRATION</div>
          <h1>Convallis turpis erat tempus, viverra aliquet.</h1>
          <ButtonPrimary name="Get In Touch" />
          <Review
            opinion="I feel so much less stressed ❤️ as I now know by the book."
            url="images/Ellipse 34.jpg"
            alt="face"
            name="Andry Ford"
            job="CEO at Whatever"
          />
        </div>
        <div className="col-sm-12 col-md-5">
          <Slider url="images/slider-bg.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
