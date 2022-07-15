import React, { Component } from "react";

export default class ToolBox extends Component {
  state = {
    searchText: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
    this.props.search(value);
  };

  clearSearchText = (e) => {
    this.setState({
      searchText: "",
    });
    this.props.search("");
  };

  render() {
    return (
      <div className="tool-box">
        <div className="logo-text">Store</div>
        <div className="search-box">
          <div className="field has-addons">
            <div className="control">
              <input
                type="text"
                className="input search-input"
                placeholder="Search Product"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>
                ✖︎
              </button>
            </div>
          </div>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-num">({this.props.cartNum})</span>
        </div>
      </div>
    );
  }
}
