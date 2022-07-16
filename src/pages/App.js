import React, { Component } from "react";
import Products from "components/Products";
import Layout from "Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Products />
      </Layout>
    );
  }
}
export default App;
