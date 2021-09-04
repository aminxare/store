import React, { useContext } from 'react';
import { productContext } from '../../context/productContext';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
    const {products}=useContext(productContext);
    console.log(products)

    return (
        <div className={classes.products}>
            {products.map(product=><ProductItem key={product.id} product={product}/>)}
        </div>
    )
}

export default Products
