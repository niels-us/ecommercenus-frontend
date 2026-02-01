import React from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import { agregarProductoAlfavorito } from "../../../redux/actions/favoritoAction";
import {
  restarProductoAlCarrito,
  sumarProductoAlCarrito,
} from "../../../redux/actions/carritoAction";

const TiendaModalProducto = ({ mostrar, setMostrar, objproducto }) => {

  let history = useHistory();

  const carrito = useSelector((state) => state.carrito);

  const objcarrito = carrito.productos.find((obj) => obj.id === objproducto.id);

  const dispatch = useDispatch();
  const agregarProducto = () => {
    dispatch(agregarProductoAlCarrito(objproducto));
    Swal.fire({
      title: "Se agrego al Carrito, Deseas ir al Carrito?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        history.push("/Carrito/Carrito");
      }
    });
  };
  const restarProducto = () => {
    if (objcarrito) {
      dispatch(restarProductoAlCarrito(objcarrito));
    }
  };
  const sumarProducto = () => {
    if (objcarrito) {
      dispatch(sumarProductoAlCarrito(objcarrito));
    }
  };

  const agregarFavorito = () => {
    dispatch(agregarProductoAlfavorito(objproducto));
    Swal.fire({
      title: "Se agrego a Favoritos, Deseas ir a Favoritos?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        history.push("/favorito/favorito");
      }
    });
  };

  return (
    <>
      <Modal size="xl" show={mostrar} onHide={() => setMostrar(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Title>
            <h5 className="card-title">{objproducto.nombre}.</h5>
          </Modal.Title> */}
        </Modal.Header>

        <Modal.Body>
          <div className="cont maincont w-100">
            <article>
              <div className="prod w-100">
                <div className="prod-slider-wrap prod-slider-shown">
                  <div className="flexsli prod-slider" id="prod-slider">
                    <ul className="slides">
                      <li>
                        <a
                          data-fancybox-group="prod"
                          className="fancy-img"
                          href={
                            objproducto.imagen && objproducto.imagen.startsWith("img/")
                              ? "/" + objproducto.imagen
                              : `https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen
                          }
                        >
                          <img
                            src={
                              objproducto.imagen && objproducto.imagen.startsWith("img/")
                                ? "/" + objproducto.imagen
                                : `https://res.cloudinary.com/soluciones-informaticas-nus/` + objproducto.imagen
                            }
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="prod-cont">
                  <div className="prod-rating-wrap">
                    <p data-rating="4" className="prod-rating">
                      <i className="rating-ico" title="1"></i>
                      <i className="rating-ico" title="2"></i>
                      <i className="rating-ico" title="3"></i>
                      <i className="rating-ico" title="4"></i>
                      <i className="rating-ico" title="5"></i>
                    </p>
                    <p className="prod-rating-count">7</p>
                  </div>
                  <p className="prod-categs">
                    <a href="#!">Lighting</a>, <a href="#!">Tools</a>
                  </p>
                  <h2>{objproducto.nombre}</h2>
                  <p className="prod-price">$ {objproducto.precio_venta}</p>
                  <p className="stock in-stock">{objproducto.stock} UND</p>
                  <p className="prod-excerpt">
                    {objproducto.descripcion}
                  </p>
                  <div className="prod-add">
                    <button
                      type="submit"
                      onClick={agregarProducto}
                      className="button"
                    >
                      <i className="icon ion-android-cart"></i> Add to cart
                    </button>
                    <p className="qnt-wrap prod-li-qnt">
                      <a href="#!" className="qnt-plus prod-li-plus">
                        <i
                          className="icon ion-arrow-up-b"
                          onClick={sumarProducto}
                        ></i>
                      </a>
                      <input
                        type="text"
                        value={objcarrito ? objcarrito.cantidad : 0}
                        readOnly
                      />
                      <a href="#!" className="qnt-minus prod-li-minus">
                        <i
                          className="icon ion-arrow-down-b"
                          onClick={restarProducto}
                        ></i>
                      </a>
                    </p>
                    <div className="prod-li-favorites">
                      <NavLink to="#" className="hover-label prod-addbtn">
                        {/* <NavLink to="#" className="hover-label add_to_wishlist"> */}
                        <i
                          className="icon ion-heart"
                          onClick={agregarFavorito}
                        ></i>
                        <span>Add to Wishlist</span>
                      </NavLink>
                      {/* <a
                        href="wishlist.html"
                        className="hover-label add_to_wishlist"
                      >
                        <i className="icon ion-heart"></i>
                        <span>Add to Wishlist</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
};

export default TiendaModalProducto;
