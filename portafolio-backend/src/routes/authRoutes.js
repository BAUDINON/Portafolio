import express from 'express';
import { login } from '../controllers/authController.js';
import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente', id: newUser.id });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
    }
});

router.post('/login', login);

export default router;