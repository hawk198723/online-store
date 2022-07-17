import React, { useState, useEffect } from "react";
import axios from "commonFunctions/axios";
import CartIem from "components/CartIem";
import Layout from "Layout";
import { formatPrice } from "commonFunctions/helper";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/carts").then((res) => setCarts(res.data));
  }, []);

  const totalPrice = () => {
    console.log("----totalPrice-----");
    const totalPrice = carts
      .map((cart) => cart.amount * parseInt(cart.price))
      .reduce((a, value) => a + value, 0);
    return formatPrice(totalPrice);
  };
  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-list">
          {carts.map((cart) => (
            <CartIem key={cart.id} cart={cart} />
          ))}
        </div>
        <div className="cart-total">
          Total:
          <span className="total-price">{totalPrice()}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
