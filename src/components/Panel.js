import React, { Component } from "react";
import { render } from "react-dom";

class Panel extends Component {
  state = {
    active: false,
    component: null,
  };

  open = (options) => {
    const { component } = options;
    const _component = React.createElement(component, { close: this.close });
    this.setState({
      active: true,
      component: _component,
    });
  };
  close = () => {
    this.setState({ active: false });
  };
  render() {
    const _class = {
      true: "panel-wrapper active",
      false: "panel-wrapper",
    };
    return (
      <div className={_class[this.state.active]}>
        <div className="over-layer" onClick={this.close}>
          <div className="panel">
            <div className="head">
              <span className="close" onClick={this.close}>
                ✖︎
              </span>
              {this.state.component}
            </div>
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
