import fs from "fs"
import bcrypt from "bcrypt"
import { Request, Response, NextFunction } from 'express';

export function validateRegister(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    if (!email.includes("@") || !email.includes('.com')) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    next();
}
