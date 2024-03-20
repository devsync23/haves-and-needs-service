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

export async function getNeeds(req: Request, res: Response) {
    try {
        const needs = await Need.find()
        res.send({ needs: needs })
    }
    catch (err) {
        console.error(err)
    }
}

// make one based off of zipcode
export async function getNeedsFromZip(req: Request, res: Response) {
    try {
        const { zip } = req.body
        const response = await Need.find({ zip })
        console.log(response)
        res.send({ needs: response })
    }
    catch (err) {
        console.error(err)
    }
}

// make one based off of title
export async function getNeedsFromTitle(req: Request, res: Response) {
    try {
        const { title } = req.body
        const searchWords = title.split(' ')
        const regexArray = searchWords.map((word: string | RegExp) => new RegExp(word, 'i'))
        const needs = await Need.find()
        const rankedNeeds = needs.map(need => {
            const matches = regexArray.reduce((totalMatches: number, regex: { [Symbol.match](string: string): RegExpMatchArray | null; }) => {
                return totalMatches + (need.title?.match(regex) || []).length
            }, 0)
            return { need, matches }
        }).sort((a, b) => b.matches - a.matches)
        res.send({ rankedNeeds })
    }
    catch (err) {
        console.error(err)
    }
}


export async function getNeedsFromDescription(req: Request, res: Response) {
    try {
        const { description } = req.body
        const searchWords = description.split(' ')
        const regexArray = searchWords.map((word: string | RegExp) => new RegExp(word, 'i'))
        const needs = await Need.find()
        const rankedNeeds = needs.map(need => {
            const matches = regexArray.reduce((totalMatches: number, regex: { [Symbol.match](string: string): RegExpMatchArray | null; }) => {
                return totalMatches + (need.description?.match(regex) || []).length
            }, 0)
            return { need, matches }
        }).sort((a, b) => b.matches - a.matches)
        res.send({ rankedNeeds })
    }
    catch (err) {
        console.error(err)
    }
}

export async function createNeed(req: Request, res: Response) {
    try {
        const { title, description, zip, quantity } = req.body
        const { user } = res.locals
        const newNeed = new Need({
            title,
            description,
            zip,
            quantity,
            user
        })
        await newNeed.save()
        res.send({ message: `${user.name} has created a need: ${newNeed.title} with a quantity of ${newNeed.quantity} at zipcode ${newNeed.zip} has been created` })
    }
    catch (err) {
        console.error(err)
    }
}

export async function updateNeed(req: Request, res: Response) {
    try {
        const needId = req.params.id
        console.log(needId)
        const updates = req.body
        const response = await Need.findOneAndUpdate({ _id: needId }, updates, { new: true })
        console.log(response)
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
