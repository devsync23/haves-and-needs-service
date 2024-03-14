import { Request, Response, NextFunction } from 'express'

export async function validateUserRequest(req: Request, res: Response, next: NextFunction){
    try{
        const userEmail = req.body.email
        const userPassword = req.body.password
        if(!userEmail || !userPassword){
            res.status(400).send('Error: Missing user email or user password')
        }
        else{
            next()
        }
    } catch (err) {
        res.send(`Error during validation: ${err}`)
    }
}
