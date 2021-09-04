import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
    return (
        <div className={classes.products}>
            <ProductItem />
        </div>
    )
}

export default Products
