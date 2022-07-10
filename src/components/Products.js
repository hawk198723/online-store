import React, { Component } from "react";
import Product from "components/Product";
import ToolBox from "components/ToolBox";
import axios from "commonFunctions/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Panel from "components/Panel";
import AddInventory from "components/AddInventory";
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

  toAdd = () => {
    Panel.open({
      component: AddInventory,
    });
  };
  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
              {this.state.products.map((product) => {
                return (
                  <CSSTransition
                    classNames="product-fade"
                    timeout={{ enter: 300, exit: 300 }}
                    key={product.id}
                  >
                    <div className="column is-3" key={product.id}>
                      <Product product={product} />
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
          <button className="button is-primary add-btn" onClick={this.toAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
