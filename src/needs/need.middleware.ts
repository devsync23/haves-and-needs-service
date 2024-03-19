import { Request, Response, NextFunction } from 'express';

export function validateNeed(req: Request, res: Response, next: NextFunction){
    const need = req.body
    if(!need.title || need.title.length > 50 || typeof need.title !== 'string'){
        res.status(400).send('need Data: invalid input for title field')
    }
    else if(!need.description || need.description.length > 200 || typeof need.description !== 'string'){
        res.status(400).send('need Data: invalid input for description field')
    }
    else if(!need.zip || need.zip.length > 5 || need.zip.match(/[^0-9]/g) ||typeof need.zip !== 'string'){
        res.status(400).send('need Data: invalid input for zip field')
    }
    else{
        next()
    }
}
