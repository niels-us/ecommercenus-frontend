import {
  FIN_CARGANDO_LOGIN,
  INICIO_CARGANDO_LOGIN,
  SET_CERRAR_LOGIN,
  SET_SUCCESS_LOGIN,
} from "../types/types";
// import { URL_BACKEND } from "../../environments/environments";
// import axios from "axios";
import { USUARIOS } from "../../mock/mockData";
import Swal from "sweetalert2";
import { cargarFavoritos, limpiarFavoritos } from "./favoritoAction";

const inicioCargandoLogin = () => {
  return {
    type: INICIO_CARGANDO_LOGIN,
  };
};
const finCargandoLogin = () => {
  return {
    type: FIN_CARGANDO_LOGIN,
  };
};

export const iniciarSesionAction = (username, clave) => {
  return async (dispatch) => {
    dispatch(inicioCargandoLogin());

    // MOCK LOGIN - Bypass backend
    // const endpoint = `${URL_BACKEND}/login`;
    // const response = await axios.post(
    //   endpoint,
    //   JSON.stringify({ username: username, clave: clave }),
    //   {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }
    // );

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock response with a valid-ish JWT structure (Header.Payload.Signature)

    // Validate credentials against mock data
    // Validate credentials against mock data AND localStorage
    const localUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const allUsers = [...USUARIOS.content, ...localUsers];

    const userFn = (u) => u.username === username && u.clave === clave;
    const user = allUsers.find(userFn);

    if (!user) {
      // SImulate Error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o clave incorrectos",
      });
      dispatch(finCargandoLogin());
      return;
    }

    const mockPayload = btoa(JSON.stringify({
      content: [user]
    }));

    const response = {
      status: 200,
      data: {
        token: `header.${mockPayload}.signature`
      }
    };

    if (response.status === 200) {
      let { token } = response.data;
      localStorage.setItem("token", token);
      let payload = token.split(".")[1];
      let payloadDecoded = atob(payload);
      let payloadJSON = JSON.parse(payloadDecoded);
      // console.log(payloadJSON.nombre);
      console.log(payloadJSON.content[0].nombre);
      dispatch({
        type: SET_SUCCESS_LOGIN,
        payload: {
          autenticado: true,
          usu_username: payloadJSON.content[0].username,
          usu_nombre: payloadJSON.content[0].nombre,
          usu_direc: payloadJSON.content[0].direccion,
          usu_id: payloadJSON.content[0].id,
          // usu_tipo: payloadJSON.content[0].rol_id,
          token: token,
        },
      });
      // Cargar favoritos del usuario
      dispatch(cargarFavoritos(payloadJSON.content[0].id));
    }

    dispatch(finCargandoLogin());
  };
};

export const cerrarSesionAction = () => {
  return async (dispatch) => {
    dispatch(inicioCargandoLogin());
    dispatch({
      type: SET_CERRAR_LOGIN,
      payload: {
        autenticado: false,
        token: null,
        usu_nom: null,
        cargando: false,
        usu_tipo: null,
        usu_id: null,
      },
    });
    // Limpiar favoritos al cerrar sesión
    dispatch(limpiarFavoritos());
    localStorage.removeItem("token");
    dispatch(finCargandoLogin());
  };
};

export const validarTokenAction = (token) => {
  return async (dispatch) => {
    try {
      let payload = token.split(".")[1];
      let payloadDecoded = atob(payload);
      let payloadJSON = JSON.parse(payloadDecoded);

      dispatch({
        type: SET_SUCCESS_LOGIN,
        payload: {
          autenticado: true,
          usu_username: payloadJSON.content[0].username,
          usu_nombre: payloadJSON.content[0].nombre,
          usu_direc: payloadJSON.content[0].direccion,
          usu_id: payloadJSON.content[0].id,
          token: token,
        },
      });

      if (payloadJSON.content[0].id) {
        dispatch(cargarFavoritos(payloadJSON.content[0].id));
      }
    } catch (error) {
      console.log("Error al validar token:", error);
      dispatch(cerrarSesionAction());
    }
  };
};
