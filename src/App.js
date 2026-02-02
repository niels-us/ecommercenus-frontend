import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TiendaRouter from "./modulos/tienda/TiendaRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import CarritoRouter from "./modulos/carrito/CarritoRouter";
import ProductoRouter from "./modulos/productos/ProductoRouter";
import FavoritoRouter from "./modulos/favoritos/FavoritoRouter";
import ClientePedidos from "./modulos/cliente/pages/ClientePedidos";
import ClienteCliente from "./modulos/cliente/pages/ClienteCliente";
import LoginLogin from "./modulos/login/pages/LoginLogin";
import { validarTokenAction } from "./redux/actions/loginAction";
const App = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      store.dispatch(validarTokenAction(token));
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/tienda" component={TiendaRouter} />
            <Route path="/carrito" component={CarritoRouter} />
            <Route path="/Cliente/cliente" component={ClienteCliente} />
            <Route path="/Cliente/Pedidos" component={ClientePedidos} />
            <Route path="/Login/Login" component={LoginLogin} />
            <Route path="/Producto" component={ProductoRouter} />
            <Route path="/favorito" component={FavoritoRouter} />
            <Redirect to="/tienda/tienda" />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
