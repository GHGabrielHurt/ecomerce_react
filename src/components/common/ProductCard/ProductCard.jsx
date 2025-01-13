import React from "react";
import './productCard.css';

export const ProductCard =  (props) => {
 console.log(props);
    return(
        <div className="item">
        <h2 className="title">{props.titulo}</h2>
        <p>{props.descripcion}</p>
        <h2 className="item-price">{props.precio}</h2>
        </div>
    )
} 