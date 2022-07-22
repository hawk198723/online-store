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
    cartNum: 0,
  };
  componentDidMount() {
    axios.get("/products").then((response) => {
      console.log(response.data);
      this.setState({
        products: response.data,
        sourceProducts: response.data,
      });
    });
    this.updateCartNum();
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
      callback: (data) => {
        if (data) {
          this.add(data);
        }
      },
    });
  };

  add = (product) => {
    const _products = [...this.state.products];
    _products.push(product);

    const _sourceProducts = [...this.state.sourceProducts];
    _sourceProducts.push(product);
    this.setState({
      products: _products,
      sourceProducts: _sourceProducts,
    });
  };

  update = (product) => {
    const _products = [...this.state.products];
    const _index = _products.findIndex((p) => p.id === product.id);
    _products.splice(_index, 1, product);

    const _sourceProducts = [...this.state.sourceProducts];
    const _sourceIndex = _products.findIndex((p) => p.id === product.id);
    _sourceProducts.splice(_sourceIndex, 1, product);

    this.setState({
      products: _products,
      sourceProducts: _sourceProducts,
    });
  };

  delete = (id) => {
    const _products = this.state.products.filter((p) => p.id !== id);
    const _sourceProducts = this.state.sourceProducts.filter(
      (p) => p.id !== id
    );
    this.setState({
      products: _products,
      sourceProducts: _sourceProducts,
    });
  };

  updateCartNum = async () => {
    const cartNum = await this.initCartNum();
    this.setState({
      cartNum: cartNum,
    });
  };

  initCartNum = async () => {
    const res = await axios.get("/carts");
    const carts = res.data || [];
    const cartNum = carts
      .map((cart) => cart.amount)
      .reduce((a, value) => a + value, 0);

    return cartNum;
  };
  render() {
    return (
      <div>
        <ToolBox search={this.search} cartNum={this.state.cartNum} />
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
                      <Product
                        product={product}
                        update={this.update}
                        delete={this.delete}
                        updateCartNum={this.updateCartNum}
                      />
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
          {(global.auth.getUser() || {}).type === 1 && (
            <button className="button is-primary add-btn" onClick={this.toAdd}>
              Add
            </button>
          )}
        </div>
      </div>
    );
  }
}
