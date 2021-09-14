import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import Cart from "../../cart/Cart";
import { useProductContext } from "../../../context/productContext";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { loadProducts } = useProductContext();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
window.innerWidth<=900 && setShowNavbar(false);
    window.addEventListener("resize", () => {
      window.innerWidth >= 900 ? setShowNavbar(true) : setShowNavbar(false);
    });
    window.addEventListener("scroll", e => {
      const navbar = document.querySelector("[class^=navbar_navbar]");
      const { height ,top} = navbar.getBoundingClientRect();
      const {scrollTop} = document.documentElement;
      if (scrollTop > height) navbar.classList.add(classes.fixed);
      else navbar.classList.remove(classes.fixed);
    });
  }, []);

  return (
    <div className={classes.navbar}>
      <input
        type="checkbox"
        id="navi-toggle"
        onChange={e => setShowNavbar(e.target.checked)}
      />

      <label for="navi-toggle">
        <i
          className={`fas ${showNavbar ? "fa-times" : "fa-bars"} ${
            classes.menu
          }`}
        ></i>
      </label>

      <div className={`${classes.container} ${!showNavbar && classes.hidden}`}>
        <h3>Store</h3>
        <ul>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink exact activeClassName={classes.active} to="/">
              Home
            </NavLink>
          </li>
          <li onClick={() => setShowNavbar(false)}>
            <NavLink
              activeClassName={classes.active}
              to="/products"
              onClick={() => loadProducts()}
            >
              Products
            </NavLink>
          </li>
        </ul>
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
