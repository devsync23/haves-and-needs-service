import { Request, Response } from 'express'

export async function getNeed(req: Request, res: Response) {
    try {
        res.send(req.url)
    }
    catch (err) {
        console.error(err)
    }
}

export async function getNeeds(req: Request, res: Response) {
    try {
        res.send(req.url)
    }
    catch (err) {
        console.error(err)
    }
}

export async function createNeed(req: Request, res: Response) {
    try {
        res.send(req.url)
    }
    catch (err) {
        console.error(err)
    }
}

export async function updateNeed(req: Request, res: Response) {
    try {
        res.send(req.url)
    }
    catch (err) {
        console.error(err)
    }
}

export async function deleteNeed(req: Request, res: Response) {
    try {
        res.send(req.url)
    }
    catch (err) {
        console.error(err)
    }
}
