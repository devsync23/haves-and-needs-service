import { Request, Response, NextFunction } from 'express'
import Have from './have.model'

const havesMockData = [
    {
        title: "Product X",
        description: "A high-tech device designed to simplify your life",
        zip: 90210,
        quantity: 10,
    },
    {
        title: "Item Y",
        description: "An essential tool for everyday tasks",
        zip: 60601,
        quantity: 3,
    },
    {
        title: "Accessory Z",
        description: "A stylish add-on to enhance your experience",
        zip: 10001,
        quantity: 8,
    }
];

// under api/haves route
export async function createHave(req: Request ,res: Response){
    try{
        res.send('API Route Reached')
    } catch (err){
        res.send(`Error status: ${err}`)
    }
}

export async function getHaves(req: Request ,res: Response){
    try{
        res.send({ haves: havesMockData })
    } catch (err){
        res.send(`Error status: ${err}`)
    }
}

// under api/haves/:id route
export async function getHave(req: Request ,res: Response){
    try{
        res.send({ haves: havesMockData[0] })
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
