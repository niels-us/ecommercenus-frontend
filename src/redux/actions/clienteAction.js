// import axios from "axios";
// import { URL_BACKEND } from '../../environments/environments'
import {
  FIN_CARGANDO_CLIENTE,
  INICIO_CARGANDO_CLIENTE,
  SET_REGISTER_CLIENTE,
} from "../types/types";

const inicioCargandoCliente = () => {
  return {
    type: INICIO_CARGANDO_CLIENTE,
  };
};
const finCargandoCliente = () => {
  return {
    type: FIN_CARGANDO_CLIENTE,
  };
};

export const registroClienteAction = (nombre, numro_documento, direccion, telefono, email, username, clave, tipo_documento_id, tipo_usuario_id) => {
  return async (dispatch) => {
    dispatch(inicioCargandoCliente());

    // Mock Backend: Save to localStorage
    const newUser = {
      id: Date.now(),
      nombre,
      numro_documento,
      direccion,
      telefono,
      email,
      username,
      clave,
      estado: true,
      rol_id: 1, // Default user role
      tipo_documento_id,
      tipo_usuario_id
    };

    try {
      const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
      storedUsers.push(newUser);
      localStorage.setItem('registered_users', JSON.stringify(storedUsers));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    dispatch({
      type: SET_REGISTER_CLIENTE,
      payload: {
        registrado: true,
      },
    });

    dispatch(finCargandoCliente());
  };
};
