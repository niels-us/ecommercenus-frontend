import React from "react";

const TiendaVistaProducto = ({ objproducto }) => {
  return (
    <>
      <li>
        <span className="remove">
          &times;
        </span>
        <span>
          <img
            src={
              getImageUrl(objproducto.imagen)
            }
            alt=""
          />
          {objproducto.nombre}
        </span>
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
