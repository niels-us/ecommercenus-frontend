import { TIPOMONEDA } from "../../mock/mockData";
import { FIN_CARGANDO_TIPOMONEDA, INICIO_CARGANDO_TIPOMONEDA, SET_TIPOMONEDA } from "../types/types";


export const setCargandoTipoMonedas = () => {
    return {
        type: INICIO_CARGANDO_TIPOMONEDA
    }
};
export const setFinCargandoTipoMonedas = () => {
    return {
        type: FIN_CARGANDO_TIPOMONEDA
    }
};

export const getTipoMonedas = () => {
    return async (dispatch) => {

        dispatch(setCargandoTipoMonedas());

        // const endpoint=`${URL_BACKEND}/tipomoneda`;
        // const response= await axios.get(endpoint);

        dispatch({
            type: SET_TIPOMONEDA,
            payload: TIPOMONEDA.content,

        })

        dispatch(setFinCargandoTipoMonedas());
    }
}
