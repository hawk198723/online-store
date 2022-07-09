import React, { Component } from "react";
import Product from "./Product";
import ToolBox from "./ToolBox";

export default class Products extends Component {
  products = [
    {
      id: 1,
      name: "Air Jordan 1",
      tags: "45 Colors",
      image: "images/1.jpg",
      price: 59440,
      status: "available",
    },
    {
      id: 2,
      name: "Air Jordan 2",
      tags: "13 Colors",
      image: "/images/2.jpg",
      price: 53533,
      status: "available",
    },
    {
      id: 3,
      name: "Air Jordan 3",
      tags: "34 Colors",
      image: "images/3.jpg",
      price: 77897,
      status: "available",
    },
    {
      id: 4,
      name: "Air Jordan 4",
      tags: "6 Colors",
      image: "images/4.jpg",
      price: 12344,
      status: "available",
    },
    {
      id: 5,
      name: "Air Jordan 5",
      tags: "2 Colors",
      image: "images/5.jpg",
      price: 66666,
      status: "unavailable",
    },
  ];
  render() {
    return (
      <div>
        <ToolBox />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.products.map((product) => {
              return (
                <div className="column is-3" key={product.id}>
                  <Product product={product} />
                </div>
              );
            })}

            {/* <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
