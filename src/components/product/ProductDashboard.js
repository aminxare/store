import React from 'react';
import Menu from './Menu';
import classes from './ProductDashboard.module.css';
import Products from './Products';

const ProductDashboard = () => {
    
    return (
        <div className={`${classes['product-dashboard']}`}>
            <Menu />
            <Products />
        </div>
    )
}

export default ProductDashboard
