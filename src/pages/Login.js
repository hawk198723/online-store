import React, { Component } from "react";
import "../css/app.scss";
import "../css/style.scss";

export default function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    // this.props.history.push("/");
  };
  return (
    <div className="login-wrapper">
      <button
        className="button"
        onClick={(event) => this.handleClick("click", event)}
      >
        click me
      </button>
      <form className="box login-box" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-fullwidth is-primary">Login</button>
        </div>
      </form>
    </div>
  );
}
