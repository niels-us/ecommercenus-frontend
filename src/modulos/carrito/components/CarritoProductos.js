import React from "react";
import Swal from "sweetalert2";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { eliminarProductoAlCarrito, restarProductoAlCarrito, sumarProductoAlCarrito } from "../../../redux/actions/carritoAction";
import { agregarProductoAlfavorito } from "../../../redux/actions/favoritoAction";

const CarritoProductos = ({ objproducto }) => {

  const dispatch = useDispatch();
  const eliminarProducto = () => {
    dispatch(eliminarProductoAlCarrito(objproducto));
  };
  const restarProducto = () => {
    dispatch(restarProductoAlCarrito(objproducto));
  };
  const sumarProducto = () => {
    dispatch(sumarProductoAlCarrito(objproducto));
  };

  let history = useHistory();
  const agregarFavorito = () => {
    console.log('agregarFavorito');
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
      <article className="prod-li sectls">
        <div className="prod-li-inner">
          <a href="product.html" className="prod-li-img">
            <img
              src={getImageUrl(objproducto.imagen)}
              alt=""
            />
          </a>
          <div className="prod-li-cont">
            <div className="prod-li-ttl-wrap">
              <p>
                {/* <a href="#"></a> */}
              </p>
              <h3>
                <a href="product.html">{objproducto.nombre}</a>
              </h3>
            </div>

            <div className="prod-li-prices">
              <div className="prod-li-price-wrap">
                <p>Price</p>
                <p className="prod-li-price">${objproducto.precio_venta}</p>
              </div>
              <div className="prod-li-qnt-wrap">
                <p className="qnt-wrap prod-li-qnt">
                  <button type="button" className="qnt-plus prod-li-plus" onClick={sumarProducto}>
                    <i className="icon ion-arrow-up-b"></i>
                  </button>
                  <input type="text" value={objproducto.cantidad} readOnly />
                  <button type="button" className="qnt-minus prod-li-minus" onClick={restarProducto}>
                    <i className="icon ion-arrow-down-b"></i>
                  </button>
                </p>
              </div>
              <div className="prod-li-total-wrap">
                <p>Total</p>
                <p className="prod-li-total">S/.{objproducto.cantidad * objproducto.precio_venta}</p>
              </div>
            </div>
          </div>
          <div className="prod-li-info">
            <div className="prod-li-rating-wrap">
              <p data-rating="2" className="prod-li-rating">
                <i className="rating-ico" title="1"></i>
                <i className="rating-ico" title="2"></i>
                <i className="rating-ico" title="3"></i>
                <i className="rating-ico" title="4"></i>
                <i className="rating-ico" title="5"></i>
              </p>
              <p className="prod-li-rating-count">32</p>
            </div>
            <p className="prod-li-add">
              <button type="button" className="button hover-label prod-addbtn" onClick={(e) => { e.preventDefault(); eliminarProducto(); }}>
                <i className="icon ion-close-round" ></i>
                <span>Remove</span>
              </button>
            </p>
            {/* <p className="prod-li-compare">
              <a href="compare.html" className="hover-label prod-li-compare-btn">
                <span>Compare</span>
                <i className="icon ion-arrow-swap"></i>
              </a>
            </p> */}
            <p className="prod-quickview">
              <button type="button" className="hover-label quick-view">
                <i className="icon ion-plus"></i>
                <span>Quick View</span>
              </button>
            </p>
            <div className="prod-li-favorites">
              <NavLink to="#" className="hover-label add_to_wishlist">
                {/* <NavLink to="#" className="hover-label prod-addbtn"> */}
                <i
                  className="icon ion-heart"
                  onClick={agregarFavorito}
                ></i>
                <span>Add to Wishlist</span>
              </NavLink>
              {/* <a href="wishlist.html" className="hover-label add_to_wishlist">
                <i className="icon ion-heart"></i>
                <span>Add to Wishlist</span>
              </a> */}
            </div>
            <p className="prod-li-information">
              <button type="button" className="hover-label">
                <i className="icon ion-more"></i>
                <span>Show Information</span>
              </button>
            </p>
          </div>
          <p className="prod-li-badge">
            <span>Sale</span>
          </p>
        </div>
        <div className="page-styling prod-li-informations">
          <div className="prod-info-grid">
            <div className="info-item desc-item">
              <span className="info-label">Descripción:</span>
              <span className="info-value">{objproducto.descripcion}</span>
            </div>
            {objproducto.marca && (
              <div className="info-item">
                <span className="info-label">Brand:</span>
                <span className="info-value">{objproducto.marca}</span>
              </div>
            )}
            {objproducto.peso && (
              <div className="info-item">
                <span className="info-label">Peso:</span>
                <span className="info-value">{objproducto.peso}</span>
              </div>
            )}
            {objproducto.dimensiones && (
              <div className="info-item">
                <span className="info-label">Dimensiones:</span>
                <span className="info-value">{objproducto.dimensiones}</span>
              </div>
            )}
            {objproducto.color && (
              <div className="info-item">
                <span className="info-label">Color:</span>
                <span className="info-value">{objproducto.color}</span>
              </div>
            )}
            {objproducto.pais && (
              <div className="info-item">
                <span className="info-label">Pais:</span>
                <span className="info-value">{objproducto.pais}</span>
              </div>
            )}
            {objproducto.material && (
              <div className="info-item">
                <span className="info-label">Material:</span>
                <span className="info-value">{objproducto.material}</span>
              </div>
            )}
            <div className="info-item">
              <span className="info-label">Stock:</span>
              <span className="info-value">{objproducto.stock}</span>
            </div>
          </div>
        </div>
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

export default CarritoProductos;
