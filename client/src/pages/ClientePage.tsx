import { useEffect, useState } from "react";
import {
  getClientesRequest,
  deleteClienteRequest,
} from "../api/cliente.api.js";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
function ClientePage() {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    async function loadCliente() {
      const response = await getClientesRequest();
      setClientes(response.data);
    }

    loadCliente();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await deleteClienteRequest(id);
      setClientes(clientes.filter((cliente) => cliente.id != id));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  function renderMain() {
    return clientes.map((cliente) => (
      <tr>
        <td>{cliente.cedula_cliente}</td>
        <td>{cliente.modelo_vehiculo}</td>
        <td>{cliente.factores_compra}</td>
        <td>{cliente.calificacion_prueba_manejo}</td>
        <td>{cliente.calificacion_satisfaccion}</td>
        <td>
          <button
            onClick={() => navigate(`/edit/${cliente.id}`)}
            className="btn btn-warning"
          >
            Editar
          </button>
        </td>

        <td>
          <button
            onClick={() => handleDelete(cliente.id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </td>
      </tr>
    ));
  }
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <h1>Encuestas</h1>

          <div className="row py-3">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Cedula del cliente</th>
                  <th>Modelo del vehiculo</th>
                  <th>Factores de compra</th>
                  <th>Calificacion de prueba de manejo</th>
                  <th>Calificacion de satisfaccion</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>{renderMain()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ClientePage;
