import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import Button from '../ui/Button'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <h3>Store</h3>
        <ul>
          <li><NavLink exact activeClassName={classes.active} to='/'>Home</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/products'>Products</NavLink></li>
        </ul>
        <Button className={`${classes.cart}`} to='/cart' extraClass='cart'>Cart<span>01</span></Button>
      </div>
    </div>
  );
};

export default Navbar;
