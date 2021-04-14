import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

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
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
