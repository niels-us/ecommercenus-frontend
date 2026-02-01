import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import CarritoProductos from "../components/CarritoProductos";


const CarritoCarrito = (props) => {

  const carrito = useSelector((state) => state.carrito);
  const { categorias } = useSelector((state) => state.categoria);

  return (
    <div id="page" className="site">

      <TiendaHeader categorias={categorias} />

      <div id="content" className="site-content">
        <div id="primary" className="content-area width-normal">
          <main id="main" className="site-main">
            <div className="cont maincont">
              <h1 className="maincont-ttl">Carrito</h1>
              <ul className="b-crumbs">
                <li>
                  <NavLink to="/Tienda/Tienda">Inicico</NavLink>
                </li>
                <li>Carrito</li>
              </ul>
              <div className="page-styling">
                <div className="woocommerce prod-litems section-list">

                  {
                    carrito.productos.map((objproducto) => {

                      return <CarritoProductos key={objproducto.id || objproducto.producto_id} objproducto={objproducto} />


                    })


                  }

                </div>

                <div className="cart-actions">
                  <div className="coupon">
                    <input type="text" placeholder="Coupon code" />
                    <input type="submit" className="button" value="Apply" />
                  </div>
                  <div className="cart-collaterals">

                    <NavLink to="/Carrito/TipoPago" className="checkout-button button">
                      Proceed to checkout
                    </NavLink>
                    <div className="order-total">
                      <p className="cart-totals-ttl">Total</p>
                      <p className="cart-totals-val">$.{carrito.total.toFixed(2)} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <TiendaFooter />
    </div>
  );
};

export default CarritoCarrito;
