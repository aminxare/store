import React, { useEffect, useState } from "react";
import { useProductContext } from "../../context/productContext";
import { useCartContext } from "../../context/cartContext";
import { useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import agent from "../../api/agent";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { products, handleLoading, isProductsLoading } = useProductContext();
  const { id } = useParams();
  const { addItemToCart } = useCartContext();

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
  }, [id,handleLoading]);

  if (!product && !isProductsLoading) return <p>Product not found</p>;

  return isProductsLoading ? (
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
      <form
        onSubmit={e => {
          e.preventDefault();
          addItemToCart({ product, count });
        }}
        className={classes["box"]}
      >
        <h4 className={classes["box__title"]}>{product.title}</h4>
        <span className={classes["box__category"]}>{product.category}</span>
        <p>
          Rate: <span>{product.rating.rate}</span> / {product.rating.count}
        </p>
        <p>
          Price: <span>{product.price}</span>
        </p>
        <label htmlFor="number" className={classes["box__label"]}>
          Count:{" "}
        </label>
        <input
          className={classes["box__number"]}
          type="number"
          id="number"
          value={count}
          onChange={e => {
            if (+e.target.value === 0) return;
            setCount(+e.target.value);
          }}
        />
        <Button className={classes.btn}>Add to cart</Button>
      </form>
      <div className={classes["description"]}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
