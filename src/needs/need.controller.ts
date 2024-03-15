import { Request, Response } from 'express'

const needsMockData = [
    {
        title: "Widget A",
        description: "A versatile tool for various tasks",
        zip: 12345,
        quantity: 5,
    },
    {
        title: "Gizmo B",
        description: "An innovative gadget for everyday use",
        zip: 67890,
        quantity: 3,
    },
    {
        title: "Thingamajig C",
        description: "A mysterious object with unknown functions",
        zip: 54321,
        quantity: 1,
    }
];

export async function getNeed(req: Request, res: Response) {
    try {
        res.send({ need: needsMockData[0] })
    }
    catch (err) {
        console.error(err)
    }
}

export async function getNeeds(req: Request, res: Response) {
    try {
        res.send({ need: needsMockData })
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
