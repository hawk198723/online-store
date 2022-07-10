import React, { Component } from "react";

class AddInventory extends Component {
  render() {
    return (
      <div className="inventory">
        <p className="title has-text-centered">Inventory</p>
        <br />
        <div className="control">
          <input type="text" className="input" />
        </div>
        <div className="control">
          <button
            className="button"
            onClick={() => {
              this.props.close("addinventory data");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
export default AddInventory;
