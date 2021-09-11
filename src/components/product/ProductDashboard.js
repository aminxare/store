import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import Menu from "../layout/menu/Menu";
import classes from "./ProductDashboard.module.css";
import ProductPage from "./ProductPage";
import Products from "./Products";

const ProductDashboard = () => {
  const {loadCategories}=useProductContext();
  useEffect(()=>loadCategories(),[loadCategories])

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
        <Route exact path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact path='/categories/:name'>
          <Products />
        </Route>
        <Route path='*' >
          <p>not found</p>
        </Route>
      </Switch>
      </div>
    </div>
  );
};

export default ProductDashboard;
