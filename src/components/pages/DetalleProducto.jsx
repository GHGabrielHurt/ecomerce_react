import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./DetalleProducto.css";

const productos = [
  { id: "1", nombre: "Producto 1", descripcion: "Descripción del producto 1", imagen: "/img1.jpg", precio: "$100" },
  { id: "2", nombre: "Producto 2", descripcion: "Descripción del producto 2", imagen: "/img2.jpg", precio: "$200" },
];

const DetalleProducto = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === id);

  if (!producto) return <Typography variant="h6">Producto no encontrado</Typography>;

  return (
    <div className="detalle-producto">
      <Card className="detalle-card">
        <CardMedia component="img" height="300" image={producto.imagen} alt={producto.nombre} />
        <CardContent>
          <Typography variant="h5">{producto.nombre}</Typography>
          <Typography variant="body1">{producto.descripcion}</Typography>
          <Typography variant="h6">{producto.precio}</Typography>
          <Button variant="contained" color="primary">Comprar</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetalleProducto;
