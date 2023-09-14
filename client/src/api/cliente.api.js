import axios from "axios";

export const getClientesRequest = async () =>
  await axios.get("http://localhost:4000/cliente");

export const createClienteRequest = async (cliente) =>
  await axios.post("http://localhost:4000/cliente", cliente);

export const deleteClienteRequest = async (id) =>
  await axios.delete(`http://localhost:4000/cliente/${id}`);

export const getClienteRequest = async (id) =>
  await axios.get(`http://localhost:4000/cliente/${id}`);

export const updateClienteRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/cliente/${id}`, newFields);
