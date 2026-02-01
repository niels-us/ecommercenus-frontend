import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import FavoritoProductos from "../componentes/FavoritoProductos";

const FavoritoFavorito = () => {

    const favorito = useSelector((state) => state.favorito);

    return (
        <div id="page" className="site">
            <TiendaHeader />

            <div id="content" className="site-content"><div id="primary" className="content-area width-normal">
                <main id="main" className="site-main">
                    <div className="cont maincont">
                        <h1 className="maincont-ttl">Wishlist</h1>
                        <ul className="b-crumbs">
                            <li>
                                <NavLink to="/tienda/tienda">Home</NavLink>
                            </li>
                            <li> Wishlist</li>
                        </ul>

                        <div className="page-styling">
                            <div className="row woocommerce prod-items prod-items-3">
                                {
                                    favorito.productos.map((objproducto) => {
                                        return <FavoritoProductos key={objproducto.id || objproducto.producto_id} objproducto={objproducto} />
                                    })
                                }
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

export default FavoritoFavorito;
