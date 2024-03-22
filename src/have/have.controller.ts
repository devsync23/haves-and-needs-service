import { Request, Response, NextFunction } from 'express'
import Have from './have.model'
import jwt from 'jsonwebtoken';

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
    try {
        const have = new Have({
          title: req.body.title,
          description: req.body.description,
          zip: req.body.zip,
          quantity: req.body.quantity,
        })
        await have.save()
        res.send({
          have
        })
      } catch (err) {
        console.error("Error creating have:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    }

export async function getHaves(req: Request ,res: Response){
    try {
        const haves = await Have.find();
        res.status(200).send({ haves })
      } catch (err) {
        console.error("Error fetching haves:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    }

export async function getHave(req: Request, res: Response) {
    try {
        const haveId = req.params.id
        const have = await Have.findById(haveId)
        console.log(have)
        res.send({ haveDetails: have })
      } catch (err) {
        res.status(404).send({ err })
      }
    }

export async function updateHave(req: Request ,res: Response){
    try {
        const haveId = req.params.id
        const { title, description, zip, quantity } = req.body
        const updatedHave = await Have.findByIdAndUpdate(
          haveId,
          { title, description, zip, quantity },
          { new: true }
        )
        if (!updatedHave) {
          return res.status(404).send({ error: 'Have not found' })
        }
        res.send({ have: updatedHave })
      } catch (err) {
        console.error('Error updating have:', err)
        res.status(500).send({ error: 'Internal server error' })
      }
    }

export async function deleteHave(req: Request, res: Response) {
    try {
            const haveId = req.params.id;
            const deletedHave = await Have.findByIdAndDelete(haveId);

            if (!deletedHave) {
                return res.status(404).send({ error: 'Have not found' });
            }
            res.send({ message: 'Have deleted successfully' });
        } catch (err) {
            console.error('Error deleting have:', err);
            res.status(500).send({ error: 'Internal server error' });
        }
    }
