import { Router } from 'express';
import { getEmpleados, getEmpleado ,createEmpleado, updateEmpleado, deleteEmpleado } from '../controllers/empleados.controller.js';

const router = Router();

router.get('/vendedoras', getEmpleados);

router.get('/vendedoras/:id', getEmpleado);

router.post('/vendedoras', createEmpleado);

router.patch('/vendedoras/:id', updateEmpleado);

router.delete('/vendedoras/:id', deleteEmpleado);

export default router;