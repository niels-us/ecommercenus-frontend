import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TiendaTienda from "./pages/TiendaTienda";
import { useDispatch } from "react-redux";
import { getCategorias } from "../../redux/actions/categoriaAction";
import { getCategoriaProductos } from "../../redux/actions/productoAction";
import { getTipoUsuarios } from "../../redux/actions/tipousuarioAction";
import { getTipoDocumentos } from "../../redux/actions/tipodocumentoAction";
import { getTipoMonedas } from "../../redux/actions/tipomonedaAction";
import { getTipoComprobantes } from "../../redux/actions/tipocomprobanteAction";

const TiendaRouter = () => {



  const dispatch = useDispatch();

  // if (categorias.length == 0) {
  // dispatch(getCategoriaProductos())
  // }

  useEffect(() => {
    dispatch(getCategoriaProductos());
    dispatch(getCategorias());
    dispatch(getTipoDocumentos())
    dispatch(getTipoUsuarios())
    dispatch(getTipoMonedas())
    dispatch(getTipoComprobantes())
  }, [dispatch]);


  return (
    <>
      <Switch>
        <Route path="/tienda/tienda" component={TiendaTienda} />
        <Redirect from="/tienda" to="/tienda/tienda" />
      </Switch>
    </>
  );
};

export default TiendaRouter;
