import React, { Component } from "react";
import { formatPrice } from "commonFunctions/helper";
import Panel from "components/Panel";
import EditInventory from "components/EditInventory";
import axios from "commonFunctions/axios";
import { toast } from "react-toastify";

export default class Product extends Component {
  toEdit = () => {
    Panel.open({
      component: EditInventory,
      props: {
        product: this.props.product,
        deleteProduct: this.props.delete,
      },
      callback: (data) => {
        console.log(data);
        if (data) {
          this.props.update(data);
        }
      },
    });
  };
  addCart = async () => {
    try {
      const { id, name, image, price } = this.props.product;
      const response = await axios.get(`/carts?productId${id}`);
      const carts = response.data;
      
      if (carts && carts.length > 0) {
        const cart = carts[0];
        cart.amount += 1;
        await axios.put(`/carts/${cart.id}`, cart);
      } else {
        const cart = {
          productId: id,
          name,
          image,
          price,
          amount: 1,
        };
        await axios.post(`/carts`, cart);
      }
      toast.success("Add to Cart successfully!");
    } catch (error) {
      toast.error("Fail to add to Cart !");
    }
  };

  render() {
    const { name, image, tags, price, status } = this.props.product;
    const _pClass = {
      available: "product",
      unavailable: "product out-stock",
    };
    return (
      <div className={_pClass[status]}>
        <div className="p-content">
          <div className="p-head has-text-right" onClick={this.toEdit}>
            <span className="icon edit-btn">
              <i className="fas fa-sliders"></i>
            </span>
          </div>
          <div className="img-wrapper">
            <div className="out-stock-text">Out of Stock</div>
            <figure className="image is-4by3">
              <img src={image} alt={name} />
            </figure>
          </div>
          <p className="p-tags">{tags}</p>
          <p className="p-name">{name}</p>
        </div>
        <div className="p-footer">
          <p className="price">{formatPrice(price)}</p>
          <button
            className="add-cart"
            disabled={status === "unavailable"}
            onClick={this.addCart}
          >
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}
