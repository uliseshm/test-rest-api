//codigo de ejemplo, 
//falta instalar express, npm i express
//falta instalar nodemon, npm i nodemon -D
//falta instalar mysql2, npm i mysql2
//falta instalar dotenv, npm i dotenv


//ESTO CONFIGURA UN SERVIDOR SENCILLO
import express from 'express';
import empleadosRoutes from './routes/empleados.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(empleadosRoutes);

app.listen(3000);
console.log("Servidor en puerto 3000");

