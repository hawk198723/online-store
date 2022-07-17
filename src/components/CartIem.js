import { formatPrice } from "commonFunctions/helper";
import React, { useState, useMemo } from "react";
import axios from "commonFunctions/axios";

const CartIem = (props) => {
  const [amount, setAmount] = useState(props.cart.amount);
  const { id, name, image, price } = props.cart || {};

  const sumPrice = useMemo(() => {
    return formatPrice(amount * parseInt(price));
  }, [amount, price]);

  const handleChange = (e) => {
    const _amount = parseInt(e.target.value);
    setAmount(_amount);
    const newCart = {
      ...props.cart,
      amount: _amount,
    };
    axios.put(`/carts/${id}`, newCart).then((res) => {
      props.updateCart(newCart);
    });
  };

  const deleteCart = () => {
    axios.delete(`/carts/${id}`).then((res) => {
      props.deleteCart(props.cart);
    });
  };
  return (
    <div className="columns is-vcentered">
      <div className="column is-narrow">
        <span className="close" onClick={deleteCart}>
          ✖︎
        </span>
      </div>
      <div className="column is-narrow">
        <img src={image} alt={name} width="100" />
      </div>
      <div className="column is-narrow cart-name">{name}</div>
      <div className="column">
        <span className="price">{formatPrice(price)}</span>
      </div>
      <div className="column">
        <input
          type="number"
          className="input number-input"
          min={1}
          value={amount}
          onChange={handleChange}
        />
      </div>
      <div className="column">
        <span className="sum-price">{sumPrice}</span>
      </div>
    </div>
  );
};

export default CartIem;
