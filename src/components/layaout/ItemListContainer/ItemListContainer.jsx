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
    imagen = "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-puma-caven-2-0-mujer-crudo-89067380-640010394915005-1.jpg"
    precio = "$200.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus"/>
    <ProductCard 
    titulo="Zapatilla adidas"
    imagen = "https://images.puma.net/images/397370/02/sv01/fnd/ARG/w/600/h/600/"
    precio = "$300.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus"/>
    <ProductCard
    titulo="Zapatilla lecoq"
    imagen = "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-showtheway-2-0-negra-30349332-100010gy6348001-1.jpg"
    precio = "$500.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus" />
    <ProductCard
    titulo="Zapatilla Jaguar"
    imagen="https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/wuy7fj45i8nefyb1d33es2sf9e4f/77e513bcd3762f47919c96f85e400038a39acdbb0d268f51c1fd98fe5327bd96"
    precio = "$900.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus" />
     <ProductCard
    titulo="Zapatilla Jaguar"
    imagen="https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/wuy7fj45i8nefyb1d33es2sf9e4f/77e513bcd3762f47919c96f85e400038a39acdbb0d268f51c1fd98fe5327bd96"
    precio = "$900.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus" />
     <ProductCard
    titulo="Zapatilla Jaguar"
    imagen="https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/wuy7fj45i8nefyb1d33es2sf9e4f/77e513bcd3762f47919c96f85e400038a39acdbb0d268f51c1fd98fe5327bd96"
    precio = "$900.000"
    descripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus" />
    </div>    
    </div> 
  );
};


