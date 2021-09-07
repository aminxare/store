import React from 'react';
import classes from './Button.module.css';

const Button = ({children,onClick,disable,style}) => {
    return (
        <button className={`${classes.btn} ${disable && classes.disable}`} style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
