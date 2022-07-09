import React, { Component } from "react";
import Product from "components/Product";
import ToolBox from "components/ToolBox";
import axios from "commonFunctions/axios";
export default class Products extends Component {
  state = {
    products: [],
    sourceProducts: [],
  };
  componentDidMount() {
    axios.get("/products").then((response) => {
      console.log(response.data);
      this.setState({
        products: response.data,
        sourceProducts: response.data,
      });
    });
  }
  search = (text) => {
    console.log(text);
    //1.get new array
    let _products = [...this.state.sourceProducts];
    //2.filter new array
    _products = _products.filter((aaa) => {
      const matchArray = aaa.name.match(new RegExp(text, "gi"));
      return matchArray !== null; // return !!matchArray
    });
    //3.set State to state.products
    this.setState({
      products: _products,
    });
  };
  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.state.products.map((product) => {
              return (
                <div className="column is-3" key={product.id}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
