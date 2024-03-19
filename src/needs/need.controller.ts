import { Request, Response } from 'express'
import Need from './needs.model'

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
        const needId = req.params.id
        const response = await Need.findOne({ _id: needId })
        res.send({ need: response })
    }
    catch (err) {
        res.send(err)
    }
}

// make one based off of title
// make one based off of zipcode
export async function getNeedsFromZip(req: Request, res: Response) {
    try {
        const { zipcode } = req.body
        const response = await Need.find({ zipcode: zipcode })
        res.send({ needs: response })
    }
    catch (err) {
        console.error(err)
    }
}

export async function getNeedsFromTitle(req: Request, res: Response) {
    try {
        const { title } = req.body
        const response = await Need.find({ title: title })
        res.send({ needs: response })
    }
    catch (err) {
        console.error(err)
    }
}

export async function createNeed(req: Request, res: Response) {
    try {
        const { user, title, description, zip, quantity } = req.body
        const newNeed = new Need({
            user,
            title,
            description,
            zip,
            quantity
        })
        await newNeed.save()
        res.send({ message: `${newNeed.title} with ${newNeed.quantity} at ${newNeed.zip} has been created` })
    }
    catch (err) {
        console.error(err)
    }
}

export async function updateNeed(req: Request, res: Response) {
    try {
        const needId = req.params.id
        const updates = req.body
        const response = await Need.updateOne({ _id: needId }, updates)
        res.send({ message: `${needId} has been updated` })
    }
    catch (err) {
        console.error(err)
    }
}

export async function deleteNeed(req: Request, res: Response) {
    try {
        const needId = req.params.id
        const response = await Need.deleteOne({ _id: needId })
        res.send({ message: `${needId} has been deleted` })
    }
    catch (err) {
        console.error(err)
    }
}
