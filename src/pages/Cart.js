import Layout from "Layout";
import React, { Component } from "react";

const Cart = () => (
  <Layout>
    <div className="cart-page">
      <span className="cart-title">Shopping Cart Shopping Cart</span>
      <div className="cart-list">
        <p> Cart Product</p>
        <p> Cart Product</p>
        <p> Cart Product</p>
      </div>
      <div className="cart-total">
        Total:
        <span className="total-price">$2345</span>
      </div>
    </div>
  </Layout>
);
export default Cart;
