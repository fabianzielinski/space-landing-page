import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/Navigation";
// import ButtonPrimary from "./components/ButtonPrimary";
// import ButtonSecondary from "./components/ButtonSecondary";
// import ButtonSmall from "./components/ButtonSmall";
import Hero from "./components/Hero";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        {/* <ButtonPrimary name="Get In Touch" />
        <ButtonSecondary name="Get In Touch" />
        <ButtonSmall name="Get In Touch" /> */}
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
