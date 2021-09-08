import React, { useContext } from "react";
import { productContext } from "../../context/productContext";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";

const Products = () => {
  const {
    products,
    isLoading,
    page,
    lastPage,
    handlePageBack,
    handlePageNext,
  } = useContext(productContext);

  return isLoading ? (
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
