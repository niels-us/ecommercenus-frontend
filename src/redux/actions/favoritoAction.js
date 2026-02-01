import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, RESTAR_FAVORITO, SUMAR_FAVORITO, SET_FAVORITOS, LIMPIAR_FAVORITOS } from "../types/types"


// Helper to save favorites
const saveFavoritosToStorage = (getState) => {
	const { login, favorito } = getState();
	if (login.usu_id) {
		localStorage.setItem(`favoritos_${login.usu_id}`, JSON.stringify(favorito.productos));
	}
};

export const cargarFavoritos = (userId) => {
	return (dispatch) => {
		const storedFavoritos = localStorage.getItem(`favoritos_${userId}`);
		if (storedFavoritos) {
			dispatch({
				type: SET_FAVORITOS,
				payload: JSON.parse(storedFavoritos)
			});
		}
	};
};

export const limpiarFavoritos = () => {
	return {
		type: LIMPIAR_FAVORITOS
	};
};



export const agregarProductoAlfavorito = (objproducto) => {
	return (dispatch, getState) => {
		dispatch({
			type: AGREGAR_FAVORITO,
			payload: {
				objproducto: objproducto
			}
		});
		saveFavoritosToStorage(getState);
	};
};

export const eliminarProductoAlFavorito = (objproducto) => {
	return (dispatch, getState) => {
		dispatch({
			type: ELIMINAR_FAVORITO,
			payload: {
				objproducto: objproducto
			}
		});
		saveFavoritosToStorage(getState);
	};
};

export const sumarProductoAlFavorito = (objproducto) => {
	return (dispatch, getState) => {
		dispatch({
			type: SUMAR_FAVORITO,
			payload: {
				objproducto: objproducto
			}
		});
		saveFavoritosToStorage(getState);
	};
};

export const restarProductoAlFavorito = (objproducto) => {
	return (dispatch, getState) => {
		dispatch({
			type: RESTAR_FAVORITO,
			payload: {
				objproducto: objproducto
			}
		});
		saveFavoritosToStorage(getState);
	};
};