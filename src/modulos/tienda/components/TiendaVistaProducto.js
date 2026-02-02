import React from "react";

const TiendaVistaProducto = ({ objproducto }) => {
  return (
    <>
      <li>
        <a href="#" className="remove">
          &times;
        </a>
        <a href="#">
          <img
            src={
              getImageUrl(objproducto.imagen)
            }
            alt=""
          />
          {objproducto.nombre}
        </a>
        <span className="quantity">
          {objproducto.cantidad} &times; ${objproducto.precio_venta}
        </span>
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

export default TiendaVistaProducto;
