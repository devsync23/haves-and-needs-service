import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './user.model'
import { JWT_SECRET } from '../constants'
import { validateRegister } from './user.middleware'

export async function getUser(req: Request, res: Response) {
  try {
    const user = await User.findById('asdf')
    res.send({ user })
  } catch (err) {
    res.send(err)
  }
}

export async function getUsers(req: Request, res: Response) {
  res.send(req.url)
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, name, zip } = req.body;

    if (!validateRegister(req, res, next)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({
      name: name,
      email: email,
      password: hashPassword,
      zipcode: zip
    })
    await user.save()
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.send({ jwt: token })
  } catch (err) {
    res.status(500).send({
      message: err
    })
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' })

    const isPasswordValid = await bcrypt.compare(password, user.password ?? '')
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' })

    // Password is valid, generate JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function updateUser(req: Request, res: Response) {
  res.send(req.url)
}

export async function deleteUser(req: Request, res: Response) {
  res.send(req.url)
}
