import Swal from "sweetalert2";
import { FIN_CARGANDO_PRODUCTOS, INICIO_CARGANDO_PRODUCTOS, SET_PRODUCTOS, MOSTRAR_BANNER, OCULTAR_BANNER } from "../types/types"
import { PRODUCTOS } from "../../mock/mockData";




export const setCargandoProductos = () => {
    return {
        type: INICIO_CARGANDO_PRODUCTOS
    }
};

export const setFinCargandoProductos = () => {
    return {
        type: FIN_CARGANDO_PRODUCTOS
    }
};

export const getProductos = (id) => {
    return async (dispatch) => {

        dispatch(setCargandoProductos());

        // const endpoint = `${URL_BACKEND}/categoria/${id}`;
        // const response = await axios.get(endpoint);
        dispatch({
            type: SET_PRODUCTOS,
            payload: id ? PRODUCTOS.content.filter(p => p.categoria_id === parseInt(id)) : PRODUCTOS.content
        })

        dispatch(setFinCargandoProductos());
    }
}

export const getCategoriaProductos = () => {
    return async (dispatch) => {

        dispatch(setFinCargandoProductos());

        // const endpoint = `${URL_BACKEND}/producto`;
        // const response = await axios.get(endpoint);
        dispatch({
            type: SET_PRODUCTOS,
            payload: PRODUCTOS.content,
        })

        dispatch(setFinCargandoProductos());
    }
}


export const filtroProductos = (textoBuscado) => {
    return async (dispatch) => {

        // const endpoint = `${URL_BACKEND}/producto`;
        // const response = await axios.get(endpoint);

        let resultadoBusqueda = PRODUCTOS.content.filter((elemento) => {
            return elemento.nombre.toString().toLowerCase().includes(textoBuscado.toLowerCase());
        });

        if (resultadoBusqueda.length > 0) {

            dispatch(setFinCargandoProductos());
            dispatch({
                type: SET_PRODUCTOS,
                payload: resultadoBusqueda,
            })

        } else {
            Swal.fire('¡No se encontraron coincidencias!')
        }

        dispatch(setFinCargandoProductos());
    }
}

export const mostrarBanner = () => {
    return {
        type: MOSTRAR_BANNER
    }
}

export const ocultarBanner = () => {
    return {
        type: OCULTAR_BANNER
    }
}
