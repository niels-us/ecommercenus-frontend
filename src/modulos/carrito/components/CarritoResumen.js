import React from "react";

const CarritoResumen = ({ objproducto }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <img src={getImageUrl(objproducto.imagen)} alt="" width="50" />
        <small>{objproducto.nombre} </small>
        <span> {objproducto.cantidad}</span>
        <span> S/. {objproducto.precio_venta}</span>
      </li>
    </>
  );
};

const getImageUrl = (img) => {
  if (!img) return "";
  if (img.startsWith("http") || img.startsWith("/")) return img;
  if (img.startsWith("img/")) return "/" + img;
  return `https://res.cloudinary.com/soluciones-informaticas-nus/${img}`;
};

export default CarritoResumen;
