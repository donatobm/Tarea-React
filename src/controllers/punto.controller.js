const pool = require("../db");

const createPunto= async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newTask = await pool.query(
      "INSERT INTO cliente (nombre,cedula,compra) VALUES($1, $2, $3) RETURNING *",
      "INSERT INTO servicio (nombre,idcliente,compra) VALUES($1, $2, $3) RETURNING *",
      [title, description]
    );

    res.json(newTask.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllPunto= async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM cliente"), pool.query("SELECT * FROM servicio") ;
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

const getPunto= async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM cliente WHERE compra = $1 ORDEN BY ASC LIMIT 1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deletePunto= async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM punto WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPunto,
  getAllPunto,
  getPunto,
  deletePunto,
};
