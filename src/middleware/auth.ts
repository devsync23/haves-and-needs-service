import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../constants';

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token is missing!' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.locals.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is invalid!' });
    }
}
