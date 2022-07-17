import React, { useState, useEffect, useMemo } from "react";
import axios from "commonFunctions/axios";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CartIem from "components/CartIem";
import Layout from "Layout";
import { formatPrice } from "commonFunctions/helper";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/carts").then((res) => setCarts(res.data));
  }, []);

  const totalPrice = useMemo(() => {
    const totalPrice = carts
      .map((cart) => cart.amount * parseInt(cart.price))
      .reduce((a, value) => a + value, 0);
    return formatPrice(totalPrice);
  }, [carts]);

  const updateCart = (cart) => {
    const newCarts = [...carts];
    const _index = newCarts.findIndex((c) => c.id === cart.id);
    newCarts.splice(_index, 1, cart);
    setCarts(newCarts);
  };
  const deleteCart = (cart) => {
    const _carts = carts.filter((c) => c.id !== cart.id);
    setCarts(_carts);
  };
  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-list">
          <TransitionGroup component={null}>
            {carts.map((cart) => (
              <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
                <CartIem
                  key={cart.id}
                  cart={cart}
                  updateCart={updateCart}
                  deleteCart={deleteCart}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        {carts.length === 0 ? <p className="no-cart">Empty Cart</p> : ""}

        <div className="cart-total">
          Total:
          <span className="total-price">{totalPrice}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
