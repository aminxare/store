import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import agent from "../../api/agent";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { products, handleLoading, isLoading } = useContext(productContext);
  const { id } = useParams();

  useEffect(() => {
    const savedProduct = products.find(p => p.id === +id);

    if (savedProduct) {
      setProduct(savedProduct);
    } else {
      handleLoading(true);
      agent.products.getProduct(id).then(p => {
        setProduct(p);
        handleLoading(false);
      });
    }
  }, [id]);

  if (!product && !isLoading) return <p>Product not found</p>;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={classes["product-page"]}>
      <div className={classes["image"]}>
        <img
          src={product.image}
          alt={product.title}
          className={classes.image}
        />
      </div>
      <form className={classes["box"]}>
        <h4 className={classes["box__title"]}>{product.title}</h4>
        <span className={classes["box__category"]}>{product.category}</span>
        <label htmlFor="number" className={classes['box__label']}>Count: </label>
        <input className={classes['box__number']} type="number" id="number" value={1} />
        <Button className={classes.btn}>Add to cart</Button>
      </form>
      <div className={classes["description"]}><p>{product.description}</p></div>
    </div>
  );
};

export default ProductPage;
