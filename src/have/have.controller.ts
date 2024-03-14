import { Request, Response, NextFunction } from 'express'
import Have from './have.model'

// under api/haves route
export async function createHaves(req: Request ,res: Response){
    try{
        res.send('API Route Reached')
    } catch (err){
        res.send(`Error status: ${err}`)
    }
}

export async function getHaves(req: Request ,res: Response){
    try{
        res.send('API Route Reached')
    } catch (err){
        res.send(`Error status: ${err}`)
    }
}

// under api/haves/:id route
export async function getHave(req: Request ,res: Response){
    try{
        res.send('API Route Reached')
    } catch (err){
        res.send(`Error status: ${err}`)
    }
}

export async function updateHave(req: Request ,res: Response){
    try{
        res.send('API Route Reached')
    } catch (err){
        res.send(`Error status: ${err}`)
    }
}

export async function deleteHave(req: Request ,res: Response){
    try{
        res.send('API Route Reached')
    } catch (err){
        res.send(`Error status: ${err}`)
    }
}
