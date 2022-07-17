import { formatPrice } from "commonFunctions/helper";
import React from "react";

const CartIem = (props) => {
  const { name, image, price, amount } = props.cart || {};
  const sumPrice = formatPrice(amount * parseInt(price));
  return (
    <div className="columns is-vcentered">
      <div className="column is-narrow">
        <span className="close">X</span>
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
          defaultValue={amount}
        />
      </div>
      <div className="column">
        <span className="sum-price">{sumPrice}</span>
      </div>
    </div>
  );
};

export default CartIem;
