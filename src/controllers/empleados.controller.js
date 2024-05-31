import { pool } from '../db.js';

export const getEmpleados = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM vendedoras');
    res.json(rows);
}

export const getEmpleado = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM vendedoras WHERE id_vendedora = ?', [req.params.id])
    //se valida si no se encuentra ningun registro
    if (rows.length <= 0) return res.status(404).json({
        message: 'Vendedora no encontrada'
    })
    res.json(rows[0]);
}

export const createEmpleado = async (req, res) => {
    const { nombre, direccion, ruta, puntos, telefono } = req.body;
    const [rows] = await pool.query('INSERT INTO vendedoras (nombre, direccion, ruta, puntos, telefono) VALUES (?,?,?,?,?)', [nombre, direccion, ruta, puntos, telefono]);
    res.send({
        id: rows.insertId,
        nombre,
        ruta,
    });
}


export const deleteEmpleado = async (req, res) => {
    const [result] = await pool.query('DELETE FROM vendedoras WHERE id_vendedora = ?', [req.params.id]);

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'No se encontro vendedora'
    })
    console.log(result);
    res.sendStatus(204);
}

export const updateEmpleado = async (req, res) => {
    const {id} = req.params;
    const {nombre, telefono} = req.body;

    const [result] = await pool.query('UPDATE vendedoras SET nombre = IFNULL(?, nombre), telefono = IFNULL(?, telefono) WHERE id_vendedora = ?', [nombre, telefono, id]);

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Vendedora no encontrada'
    })

    const [rows] = await pool.query('SELECT * FROM vendedoras WHERE id_vendedora = ?', [id]);

    console.log(rows[0]);
    res.json(rows[0]);
}