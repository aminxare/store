import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import Cart from "../../cart/Cart";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <h3>Store</h3>
        <ul>
          <li><NavLink exact activeClassName={classes.active} to='/'>Home</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/products'>Products</NavLink></li>
        </ul>
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
