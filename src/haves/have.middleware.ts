import { Request, Response, NextFunction } from 'express';

export function validateHave(req: Request, res: Response, next: NextFunction){
    const have = req.body
    if(!have.title || have.title.length > 20 || typeof have.title !== 'string'){
        res.status(400).send('Have Data: invalid input for title field')
    }
    else if(!have.description || have.description.length > 200 || typeof have.description !== 'string'){
        res.status(400).send('Have Data: invalid input for description field')
    }
    else if(!have.zip || have.zip.length > 5 || have.zip.match(/[^0-9]/g) ||typeof have.zip !== 'string'){
        res.status(400).send('Have Data: invalid input for zip field')
    }
    else{
        next()
    }
}
