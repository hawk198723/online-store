import Header from "components/Header";
import React from "react";

const Layout = (props) => (
  <div className="main">
    <Header />
    {props.children}
  </div>
);
export default Layout;
