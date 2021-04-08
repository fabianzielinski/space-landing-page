import React from "react";
import ReactDOM from "react-dom";
// import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
