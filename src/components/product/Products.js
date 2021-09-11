import React, { useEffect } from "react";
import { useProductContext } from "../../context/productContext";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import { useParams } from "react-router-dom";

const Products = () => {
  const {
    products,
    isProductsLoading,
    page,
    lastPage,
    handlePageBack,
    handlePageNext,
    loadProductsByCategory,
    loadProducts,
  } = useProductContext();

  const {name} = useParams();

  useEffect(()=>name ? loadProductsByCategory(name):loadProducts(),[name,loadProducts,loadProductsByCategory]);

  return isProductsLoading ? (
    <Spinner />
  ) : (
    <div className={classes.container}>
      <div className={classes.products}>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className={classes.btns}>
        <Button
          onClick={handlePageBack}
          extraClass={page === 1 ? "disable" : ""}
        >
          Back
        </Button>
        <Button
          onClick={handlePageNext}
          extraClass={page === lastPage ? "disable" : ""}
          style={{ marginLeft: "2rem" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Products;
