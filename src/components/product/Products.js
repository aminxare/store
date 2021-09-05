import React, { useContext } from "react";
import { productContext } from "../../context/productContext";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  const { products, isLoading,page,lastPage,handlePageBack,handlePageNext } = useContext(productContext);
  console.log(lastPage);
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className={classes.container}>
      <div className={classes.products}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className={classes.btns}>
        <button onClick={handlePageBack} className={`${classes.btn} ${page === 1 ? classes.disable:''}`}>Back</button>
        <button onClick={handlePageNext} className={`${classes.btn} ${page === lastPage ? classes.disable:''}`}>Next</button>
      </div>
    </div>
  );
};

export default Products;
