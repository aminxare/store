import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./Menu";
import classes from "./ProductDashboard.module.css";
import ProductPage from "./ProductPage";
import Products from "./Products";

const ProductDashboard = () => {
  return (
    <div className={`${classes["product-dashboard"]}`}>
      <Menu />
        <div className={`${classes["container"]}`}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductPage />
        </Route>
      </Switch>
      </div>
    </div>
  );
};

export default ProductDashboard;
