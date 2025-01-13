import React from 'react';
import './ItemListContainer.css';
//import './common/ProductCard/ProductCard';
import { ProductCard } from '../../common/ProductCard/ProductCard';

//import { productCard } from '../../common/ProductCard/ProductCard';
export const ItemListContainer = () => {
  // Si 'items' es undefined o null, se asigna un array vacío como valor predeterminado
  return (
    <div className='item-list-container'>
    <div className='items'>
    <ProductCard 
    titulo="Zapatilla Nike"
    precio = "$200.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus"/>
    <ProductCard 
    titulo="Zapatilla adidas"
    precio = "$300.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus"/>
    <ProductCard
    titulo="Zapatilla lecoq"
    precio = "$500.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus" />
    <ProductCard
    titulo="Zapatilla Jaguar"
    precio = "$900.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus" />
    </div>    
    </div> 
  );
};


