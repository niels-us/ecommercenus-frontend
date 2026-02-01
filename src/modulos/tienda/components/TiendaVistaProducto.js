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
              objproducto.imagen && objproducto.imagen.startsWith("img/")
                ? "/" + objproducto.imagen
                : `https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen
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

export default TiendaVistaProducto;
