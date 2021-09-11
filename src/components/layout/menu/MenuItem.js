import React from 'react'
import classes from './menu-item.module.css';
import { Link } from 'react-router-dom';

const MenuItem = ({children,name}) => {
    return (
        <div className={classes.item}>
            <Link to={`/categories/${name}`}>{children}</Link>
        </div>
    )
}


export default MenuItem
