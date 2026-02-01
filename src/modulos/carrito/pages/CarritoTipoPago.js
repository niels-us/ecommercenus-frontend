import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import { useDispatch, useSelector } from "react-redux";
import CarritoResumen from "../components/CarritoResumen";
import ModalBoleta from "../components/ModalBoleta";
import CarritoTipoComprobante from "./CarritoTipoComprobante";
import CarritoTipoMoneda from "./CarritoTipoMoneda";
import Swal from "sweetalert2";
import { getTipoPago } from "../../../redux/actions/tipopagoAction";

const CarritoTipoPago = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const { usu_nombre, usu_direc } = useSelector((state) => state.login);

  const { tipomonedas } = useSelector((state) => state.tipomoneda);
  const { tipocomprobantes } = useSelector((state) => state.tipocomprobante);


  const [datosTipoPago, setDatos] = useState({
    tipocomprobante: 0,
    tipomoneda: 0
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datosTipoPago,
      [e.target.name]: e.target.value,

    });
  };

  const registrarTipoPago = () => {
    // e.preventDefault();
    dispatch(getTipoPago(datosTipoPago));

  };



  const valor = () => {
    if (usu_nombre != null) {
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: `Tiene que iniciar sesión`,
      });
      return false;
    }
  };

  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <TiendaHeader />
      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="cont maincont">
              <h1 className="maincont-ttl">Detalles</h1>
              <ul className="b-crumbs">
                <li>
                  <NavLink to="/Tienda/Tienda">Inicico</NavLink>
                </li>
                <li>Datos Pago:</li>
              </ul>
              <div className="cont post-sidebar">
                <aside id="secondary" className="s-post page-styling">
                  <div className="blog-sb-widget">
                    <h3 className="widgettitle">Pago</h3>
                    <div className="section-sb-current">
                      <form>
                        <div className="form-group row">
                          <label
                            htmlFor="inputText1"
                            className="col-sm-3 col-form-label  text-muted"
                          >
                            Nombre
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="inputText1"
                              name="nombre"
                              value={usu_nombre || ""}
                              readOnly
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="form-group row">
                          <label
                            htmlFor="inputText2"
                            className="col-sm-3 col-form-label  text-muted"
                          >
                            Dirección
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="inputText2"
                              name="nombre"
                              value={usu_direc || ""}
                              readOnly
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="form-group row">
                          <label
                            htmlFor="inputText2"
                            className="col-sm-3 col-form-label  text-muted"
                          >
                            Tipo Comprobante
                          </label>
                          <div className="col-sm-9">
                            <select className="form-select" name="tipocomprobante" value={datosTipoPago.tipocomprobante} onChange={handleInputChange}>
                              <option value="0">Seleccionar..</option>
                              {tipocomprobantes.map((objtipocomprobante) => {
                                return (
                                  <CarritoTipoComprobante
                                    key={objtipocomprobante.id}
                                    objtipocomprobante={objtipocomprobante}
                                  />
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <br />
                        {/* AGREGO EL TIPO MONEDA Y TIPO COMPROBANTE */}
                        <div className="form-group row">
                          <label
                            htmlFor="inputText2"
                            className="col-sm-3 col-form-label  text-muted"
                          >
                            Tipo Moneda
                          </label>
                          <div className="col-sm-9">
                            <select className="form-select" name="tipomoneda" value={datosTipoPago.tipomoneda} onChange={handleInputChange} >
                              <option value="0">Seleccionar..</option>
                              {tipomonedas.map((objtipomoneda) => {
                                return (
                                  <CarritoTipoMoneda
                                    key={objtipomoneda.id}
                                    objtipomoneda={objtipomoneda}
                                  />
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <br />
                        <div className="form-group row">
                          <label
                            htmlFor="inputNumber3"
                            className="col-sm-3 col-form-label  text-muted"
                          >
                            N° Tarjeta
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="inputNumber3"
                              name="dni"
                            />
                          </div>
                        </div>
                        <br />
                        <div className="form-group row">
                          <label
                            htmlFor="inputEmail3"
                            className="col-sm-3 col-form-label  text-muted"
                          >
                            CVV
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail3"
                              name="cvv"
                            />
                          </div>
                        </div>
                        <br />
                      </form>
                    </div>
                  </div>

                  <div className="blog-sb-widget">
                    <h3 className="widgettitle">Resumen</h3>
                    <div className="section-sb-current">
                      <ul className="section-sb-list">
                        {carrito.productos.map((objproducto) => {
                          return (
                            <CarritoResumen
                              objproducto={objproducto}
                              key={objproducto.id}
                            />
                          );
                        })}
                      </ul>
                    </div>
                    {/* <div className="widget_shopping_cart">
                      <div className="widget_shopping_cart_content">
                        <ul className="cart_list">
                          {carrito.productos.map((objproducto) => {
                            return (
                              <CarritoResumen objproducto={objproducto} />
                            );
                          })}
                        </ul>
                        <p className="total">
                          <b>Subtotal:</b> $.{carrito.total}
                        </p>
                        <p className="buttons">
                          <a href="cart.html" className="button">
                            View cart
                          </a>

                          <a href="checkout.html" className="button">
                            Checkout
                          </a>
                        </p>
                      </div>
                    </div> */}
                  </div>
                  <div className="blog-sb-widget">
                    <h2>Payments</h2>
                    <div className="content">
                      <div className="checkbox">
                        <label className="checkbox-inline" htmlFor="1">
                          <input name="updates" id="1" type="checkbox" /> Check
                          Payments
                        </label>
                        <label className="checkbox-inline" htmlFor="2">
                          <input name="news" id="2" type="checkbox" /> Cash On
                          Delivery
                        </label>
                        <label className="checkbox-inline" htmlFor="3">
                          <input name="news" id="3" type="checkbox" /> PayPal
                        </label>
                        <br />
                        <br />
                      </div>
                      <img
                        src="https://www.paypalobjects.com/marketing/web/mx/logos-buttons/tarjetas_BTN.png"
                        alt="Check out with PayPal"
                      />
                    </div>
                    <div className="blog-sb-widget">
                      <button
                        className="btn"
                        onClick={() => {
                          setMostrar(valor)
                          registrarTipoPago()
                        }}
                      >
                        Pagar
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </div>
        <ModalBoleta
          mostrar={mostrar}
          setMostrar={setMostrar}
        //datos={datos}
        />
      </div>
      <TiendaFooter />
    </>
  );
};

export default CarritoTipoPago;
