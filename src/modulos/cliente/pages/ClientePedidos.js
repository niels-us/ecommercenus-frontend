import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import TiendaFooter from "../../tienda/components/TiendaFooter";

const ClientePedidos = () => {
    const { usu_id, usu_username } = useSelector((state) => state.login);
    const { categorias } = useSelector((state) => state.categoria);
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        if (usu_id) {
            const keyPedidos = `pedidos_${usu_id}`;
            const pedidosGuardados = JSON.parse(localStorage.getItem(keyPedidos) || "[]");
            // Ordenar por fecha descendente 
            setPedidos(pedidosGuardados.reverse());
        }
    }, [usu_id]);

    if (!usu_username) {
        return (
            <>
                <TiendaHeader categorias={categorias} />
                <div className="container mt-5 mb-5 text-center">
                    <h2>Debes iniciar sesión para ver tus pedidos.</h2>
                    <NavLink to="/Login/Login" className="btn btn-primary mt-3">Iniciar Sesión</NavLink>
                </div>
                <TiendaFooter />
            </>
        );
    }

    return (
        <>
            <TiendaHeader categorias={categorias} />
            <div className="container mt-5 mb-5">
                <h2 className="mb-4">Mis Pedidos</h2>
                {pedidos.length === 0 ? (
                    <div className="alert alert-info">No tienes pedidos registrados aún.</div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID Pedido</th>
                                    <th>Fecha</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th>Productos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pedidos.map((pedido) => (
                                    <tr key={pedido.id}>
                                        <td>#{pedido.id}</td>
                                        <td>{pedido.fecha}</td>
                                        <td>S/ {pedido.total.toFixed(2)}</td>
                                        <td><span className="badge badge-success">{pedido.estado}</span></td>
                                        <td>
                                            <ul className="list-unstyled">
                                                {pedido.productos.map((prod, index) => (
                                                    <li key={index}>
                                                        {prod.nombre} (x{prod.cantidad})
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <TiendaFooter />
        </>
    );
};

export default ClientePedidos;
