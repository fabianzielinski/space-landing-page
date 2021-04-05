import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
