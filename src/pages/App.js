import React, { Component } from "react";
import Header from "components/Header";
import Products from "components/Products";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header nickname="Admin" age={28} />
        <Products />
      </div>
    );
  }
}
export default App;
