import {pool} from '../db.js';

export const getEmpleados = (req, res) => {
    
    res.send('obteniendo empleados')
}

export const createEmpleado = async (req, res) => {
    const {nombre, direccion, ruta, puntos, telefono} = req.body;
    const [rows] = await pool.query('INSERT INTO vendedoras (nombre, direccion, ruta, puntos, telefono) VALUES (?,?,?,?,?)', [nombre, direccion, ruta, puntos, telefono]);
    res.send({rows});
}

export const updateEmpleado = (req, res) => res.send('actualizando empleados');

export const deleteEmpleado = (req, res) => res.send('eliminando empleados');