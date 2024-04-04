import { Request, Response } from 'express'
import Have from './have.model'

// under api/haves route
export async function createHave(req: Request, res: Response) {
  try {
    const { user } = res.locals
    const have = new Have({
      title: req.body.title,
      description: req.body.description,
      zip: req.body.zip,
      quantity: req.body.quantity,
      user: user.userId
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

export async function getHaves(req: Request, res: Response) {
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

export async function getHavesFromZip(req: Request, res: Response) {
  try {
    const haveId = req.params.id
    const have = await Have.findById(haveId)
    console.log('this is my have', have)
    if (have) {
      const zip = have.zip
      const response = await Have.find({ zip: zip })
      console.log(response)
      res.send({ haves: response })
    }
    res.send({ message: 'no haves to fetch' })
  }
  catch (err) {
    console.error(err)
  }
}

export async function updateHave(req: Request, res: Response) {
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
