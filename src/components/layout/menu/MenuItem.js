import React from 'react'
import classes from './menu-item.module.css';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../../context/productContext';

const MenuItem = ({children,name}) => {
    const {loadProductsByCategory}=useProductContext();
    return (
        <div className={classes.item}>
            <Link to={`/categories/${name}`} onClick={()=>{
                loadProductsByCategory(name);
            }}>{children}</Link>
        </div>
    )
}


export default MenuItem
