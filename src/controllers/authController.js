import { User } from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET || 'secret_key_temporal',
            { expiresIn: '1d' }
        );

        res.json({ message: 'Login exitoso', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

