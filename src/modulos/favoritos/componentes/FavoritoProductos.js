import React, { useState } from "react";
import Swal from "sweetalert2";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import TiendaModalProducto from "./TiendaModalProducto";
import { agregarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import { eliminarProductoAlFavorito } from "../../../redux/actions/favoritoAction";

const FavoritoProductos = ({ objproducto }) => {

    let history = useHistory();

    const [mostrar, setMostrar] = useState(false);

    const dispatch = useDispatch();
    const eliminarProducto = () => {
        dispatch(eliminarProductoAlFavorito(objproducto));
    };

    const agregarProducto = () => {
        dispatch(agregarProductoAlCarrito(objproducto));
        Swal.fire({
            title: "Se agregó al Carrito, Deseas ir al Carrito?",
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

    return (
        <>
            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item  sectgl-item">
                <div className="sectgl prod-i">
                    <div className="prod-i-top">
                        <img
                            src={getImageUrl(objproducto.imagen)}
                            alt=""
                        />
                        <div className="prod-i-actions">
                            <div className="prod-i-actions-in">
                                <p className="prod-quickview">
                                    <a href="#!" className="hover-label"><i className="icon ion-close-round" onClick={eliminarProducto} ></i> <span>Remove from Wishlist</span></a>
                                </p>
                                <p className="prod-quickview">
                                    <NavLink
                                        to="#"
                                        className="hover-label"
                                        onClick={() => {
                                            setMostrar(true);
                                        }}
                                    >
                                        <i className="icon ion-plus"></i>
                                        <span>Quick View</span>
                                    </NavLink>
                                    {/* <a href="#!" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a> */}
                                </p>
                                <p className="prod-i-cart">
                                    <NavLink to="#" className="hover-label prod-addbtn">
                                        <i
                                            className="icon ion-android-cart"
                                            onClick={agregarProducto}
                                        ></i>
                                        <span>Add to Cart</span>
                                    </NavLink>
                                    {/* <a href="#!" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a> */}
                                </p>
                                {/* <p className="prod-li-compare">
                                    <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="prod-i-bot">
                        <div className="prod-i-info">
                            <p className="prod-i-price">$ {objproducto.precio_venta}</p>
                            <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                        </div>
                        <h3 className="prod-i-ttl"><a href="product.html">{objproducto.nombre}</a></h3>
                    </div>

                </div>

                <TiendaModalProducto
                    mostrar={mostrar}
                    setMostrar={setMostrar}
                    objproducto={objproducto}
                />
            </article>
        </>
    );
};

const getImageUrl = (img) => {
    if (!img) return "";
    if (img.startsWith("http") || img.startsWith("/")) return img;
    if (img.includes("img/") || img.includes("static/")) return "/" + img;
    return `https://res.cloudinary.com/soluciones-informaticas-nus/${img}`;
};

export default FavoritoProductos;
