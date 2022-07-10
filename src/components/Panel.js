import React, { Component } from "react";
import { render } from "react-dom";

class Panel extends Component {
  state = {
    active: false,
    component: null,
    callback: () => {},
  };

  open = (options) => {
    const { component, callback } = options;
    const _key = new Date().getTime();
    const _component = React.createElement(component, {
      close: this.close,
      key: _key,
    });
    this.setState({
      active: true,
      component: _component,
      callback: callback,
    });
  };
  close = (data) => {
    this.setState({ active: false });
    this.state.callback(data);
  };
  render() {
    const _class = {
      true: "panel-wrapper active",
      false: "panel-wrapper",
    };
    return (
      <div className={_class[this.state.active]}>
        <div className="over-layer" onClick={this.close}></div>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={this.close}>
              ✖︎
            </span>
            {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}

const _div = document.createElement("div");
document.body.appendChild(_div);

const _panel = render(<Panel />, _div);
console.log(_panel);
export default _panel;
