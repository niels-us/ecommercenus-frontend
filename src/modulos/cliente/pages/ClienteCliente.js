import React, { useState } from "react";
import TiendaFooter from "../../tienda/components/TiendaFooter";
import TiendaHeader from "../../tienda/components/TiendaHeader";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { registroClienteAction } from "../../../redux/actions/clienteAction";
import ClienteTipousuario from "../components/ClienteTipousuario";
import ClienteTipodocumento from "../components/ClienteTipodocumento";

const ClienteCliente = (props) => {
  const dispatch = useDispatch();
  const { tipousuarios } = useSelector((state) => state.tipousuario);
  const { tipodocumentos } = useSelector((state) => state.tipodocumento);

  const [formulario, setFormulario] = useState({
    nombre: "",
    tipo_usuario_id: "",
    tipo_documento_id: "",
    numro_documento: "",
    direccion: "",
    telefono: "",
    email: "",
    username: "",
    clave: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registroClienteAction(
        formulario.nombre,
        formulario.numro_documento,
        formulario.direccion,
        formulario.telefono,
        formulario.email,
        formulario.username,
        formulario.clave,
        formulario.tipo_documento_id,
        formulario.tipo_usuario_id
      )
    );
  };

  const handleCliente = () => {
    Swal.fire({
      title: "Desea iniciar sesión?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.history.push("/Login/Login");
      } else {
        props.history.push("/Tienda/Tienda");
      }
    });
  };

  return (
    <>
      <div id="page" className="site">
        <TiendaHeader />
        <div id="content" className="site-content">
          <div id="primary" className="content-area width-normal">
            <main id="main" className="site-main">
              <div className="cont maincont">
                <h1 className="maincont-ttl">Registro</h1>
                <ul className="b-crumbs">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li> Registro</li>
                </ul>
                <article className="page-cont">
                  <div className="page-styling">
                    <div className="auth-wrap">
                      <div className="auth-col">
                        <h2>Registro Cliente</h2>
                        <form className="formulario" onSubmit={handleSubmit}>
                          <ul>
                            <p>
                              <label htmlFor="nombre">
                                Nombre <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label htmlFor="tipo_usuario_id">
                                Tipo Persona <span className="required">*</span>
                              </label>
                              <select
                                className="form-select"
                                value={formulario.tipo_usuario_id}
                                onChange={handleChange}
                                name="tipo_usuario_id"
                              >
                                <option value="">Seleccionar..</option>
                                {tipousuarios.map((objtipousuario) => {
                                  return (
                                    <ClienteTipousuario
                                      key={objtipousuario.id}
                                      objtipousuario={objtipousuario}
                                    />
                                  );
                                })}
                              </select>
                            </p>
                            <p>
                              <label htmlFor="tipo_documento_id">
                                Tipo Documento <span className="required">*</span>
                              </label>
                              <select
                                className="form-select"
                                value={formulario.tipo_documento_id}
                                onChange={handleChange}
                                name="tipo_documento_id"
                              >
                                <option value="">Seleccionar..</option>
                                {tipodocumentos.map((objtipodocumento) => {
                                  return (
                                    <ClienteTipodocumento
                                      key={objtipodocumento.id}
                                      objtipodocumento={objtipodocumento}
                                    />
                                  );
                                })}
                              </select>
                            </p>
                            <p>
                              <label htmlFor="numro_documento">
                                N° Documento <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="numro_documento"
                                value={formulario.numro_documento}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label htmlFor="direccion">
                                Dirección <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="direccion"
                                value={formulario.direccion}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label htmlFor="telefono">
                                Telefono <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="telefono"
                                value={formulario.telefono}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label htmlFor="email">
                                Email <span className="required">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formulario.email}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label htmlFor="usenname">
                                Usuario <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="username"
                                value={formulario.username}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <label htmlFor="clave">
                                Contraseña <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="clave"
                                value={formulario.clave}
                                onChange={handleChange}
                              />
                            </p>
                          </ul>

                          <p className="auth-submit">
                            <input
                              type="submit"
                              value="Guardar"
                              onClick={handleCliente}
                            />
                            <input
                              type="checkbox"
                              id="rememberme"
                              value="forever"
                            />
                            <label htmlFor="rememberme">Remember me</label>
                          </p>
                          <p className="auth-lost_password">
                            <a href="#!">Lost your password?</a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </main>
          </div>
        </div>

        <TiendaFooter />
      </div>
    </>
  );
};

export default ClienteCliente;
