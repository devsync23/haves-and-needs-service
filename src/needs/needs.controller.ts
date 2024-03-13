import { Request, Response, NextFunction } from 'express'
import Need from './needs.model'

export async function getNeed(req: Request, res: Response) {
    try {
        const need = await Need.findById(req.params.id)
        res.send({ need })
    } catch (err) {
        res.send(err)
    }
}

export async function getNeeds(req: Request, res: Response) {
    try {
        const needs = await Need.find()
        res.send(req.url)
    } catch (err) {
        res.send(err)
    }
}

export async function createNeed(req: Request, res: Response, next: NextFunction) {
    try {
        const { user, title, description, zip, goods, exchangeNeeds } = req.body
        const newNeed = new Need({
            user,
            title,
            description,
            zip,
            goods: {
                item: goods.item,
                quantity: goods.quantity,
                condition: goods.condition
            },
            exchangeNeeds
        })
        await newNeed.save()
        res.send(newNeed)
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export async function updateNeed(req: Request, res: Response) {
    res.send(req.url)
}

export async function deleteUser(req: Request, res: Response) {
    res.send(req.url)
}