import { Form, Formik } from "formik";
import {
  createClienteRequest,
  getClienteRequest,
  updateClienteRequest,
} from "../api/cliente.api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function ClienteForm() {
  const params = useParams();
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    cedula_cliente: "",
    modelo_vehiculo: "",
    factores_compra: "",
    calificacion_prueba_manejo: "",
    calificacion_satisfaccion: "",
  });

  const getCliente = async (id) => {
    try {
      const response = await getClienteRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateCliente = async (id, newField) => {
    try {
      const response = await updateClienteRequest(id, newField);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadCliente = async () => {
      if (params.id) {
        const cliente = await getCliente(params.id);
        setCliente({
          cedula_cliente: cliente.cedula_cliente,
          modelo_vehiculo: cliente.modelo_vehiculo,
          factores_compra: cliente.factores_compra,
          calificacion_prueba_manejo: cliente.calificacion_prueba_manejo,
          calificacion_satisfaccion: cliente.calificacion_satisfaccion,
        });
      }
    };
    loadCliente();
  }, []);
  return (
    <div className="container">
      <h1>{params.id ? "Editando encuenta" : "Crear encuesta"}</h1>
      <Formik
        enableReinitialize={true}
        initialValues={cliente}
        onSubmit={async (values, actions) => {
          try {
            if (params.id) {
              await updateClienteRequest(params.id, values);
              navigate("/");
            } else {
              await createClienteRequest(values);
            }

            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-2">
              <label>Cedula cliente</label>
              <input
                min="1"
                placeholder="Ingresa la cedula del cliente"
                type="number"
                name="cedula_cliente"
                onChange={handleChange}
                value={values.cedula_cliente}
              ></input>
            </div>
            <div className="col-md-2">
              <label>Modelo vehiculo</label>
              <input
                placeholder="Escribe el model del vehiculo"
                type="text"
                name="modelo_vehiculo"
                onChange={handleChange}
                value={values.modelo_vehiculo}
              ></input>
            </div>
            <div className="col-md-4">
              <label>Factor de compra</label>
              <select
                name="factores_compra"
                onChange={handleChange}
                value={values.factores_compra}
              >
                <option value="">Selecciona el factor de compra</option>
                <option value="Reputacion de la marca">
                  Reputacion de la marca
                </option>
                <option value="Opciones de financiamiento">
                  Opciones de financiamiento
                </option>
                <option value="Desempeño al manejarlo">
                  Desempeño al manejarlo
                </option>
                <option value="Recomendaciones de familiares y/o amigos">
                  Recomendaciones de familiares y/o amigos
                </option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="col-md-1">
              <label>Calificacion de prueba de manejo</label>
              <input
                min="1"
                max="5"
                type="number"
                name="calificacion_prueba_manejo"
                onChange={handleChange}
                value={values.calificacion_prueba_manejo}
              ></input>
            </div>
            <div className="col-md-1">
              <label>Calificacion de satisfaccion</label>
              <input
                min="1"
                max="5"
                type="number"
                name="calificacion_satisfaccion"
                onChange={handleChange}
                value={values.calificacion_satisfaccion}
              ></input>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ClienteForm;
