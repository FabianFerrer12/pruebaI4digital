import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cliente");
    res.json(result);
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cliente WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ message: "Cliente no encuentrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};
export const postCliente = async (req, res) => {
  try {
    const {
      cedula_cliente,
      modelo_vehiculo,
      factores_compra,
      calificacion_prueba_manejo,
      calificacion_satisfaccion,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO cliente (cedula_cliente,modelo_vehiculo,factores_compra,calificacion_prueba_manejo,calificacion_satisfaccion) VALUES (?,?,?,?,?)",
      [
        cedula_cliente,
        modelo_vehiculo,
        factores_compra,
        calificacion_prueba_manejo,
        calificacion_satisfaccion,
      ]
    );
    console.log(result);
    res.json({
      id: result.insertId,
    });
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};
export const updateCliente = async (req, res) => {
  try {
    const {
      cedula_cliente,
      modelo_vehiculo,
      factores_compra,
      calificacion_prueba_manejo,
      calificacion_satisfaccion,
    } = req.body;

    const result = await pool.query("UPDATE cliente SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};
export const deleteCliente = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM cliente WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Cliente no encontrado" });

    return res.send(204);
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};
