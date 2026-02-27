import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ message: 'Acceso denegado, token no proporcionado' });

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET || 'secret_key_temporal');
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
};