import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import InfoPlayer from "./components/InfoPlayer";
import Player from "./components/Player";
import InfoLine from "./components/InfoLine";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Gallery
          foto1="images/peter-olexa-unsplash 8.jpg"
          foto2="images/peter-olexa-unsplash 10.jpg"
          alt1="foto 8"
          alt2="foto 10"
        />
        <InfoPlayer
          left={<Player film="images/peter-olexa-player1.jpg" alt="film1" />}
          right={<InfoLine />}
        />
        <InfoPlayer
          left={<InfoLine />}
          right={<Player film="images/peter-olexa-player2.jpg" alt="film2" />}
        />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
