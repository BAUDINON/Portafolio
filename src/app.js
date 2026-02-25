import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConecction } from './config/db.js';
import './models/Project.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

testConecction();

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a mi Portafolio!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`\n======================================`);
    console.log(` Servidor corriendo en el puerto ${PORT}`);
    console.log(` Link: http://localhost:${PORT}`);
    console.log(`======================================\n`);
});
