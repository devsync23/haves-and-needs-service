import { Request, Response } from 'express'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import multer, { memoryStorage } from 'multer'


const storage = memoryStorage()
const upload = multer({ storage })

const client = new S3Client({
    region: 'us-west-1',
    credentials: {
        accessKeyId: 'AKIAX53L4JN3HK5ZYV6K',
        secretAccessKey: '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',
    }
})

export async function uploadImage(req: Request, res: Response) {
    upload.single('image')
    const file = req.file

    if (!file) {
        return res.status(400).send('No file uploaded')
    }

    const command = new PutObjectCommand({
        Bucket: 'haves-and-needs',
        Key: `images/${file.originalname}`,
        Body: file.buffer,
        ACL: 'public-read'
    })

    try {
        const data = await client.send(command)
        console.log('File uploaded sucessfully:', data.location)
        return res.status(200).send('File uploaded sucessfully')
    } catch (err) {
        console.error(err)
        return res.status(500).send('Error uploading file.')
    }
}
