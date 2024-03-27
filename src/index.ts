import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './router'
import { initMongoose } from './db'
import { S3Client } from '@aws-sdk/client-s3'

const PORT = 3000;
const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use('/', router)

server.listen(PORT, () => {
  console.log('server listening on port: ', PORT)
  initMongoose()
})

const client = new S3Client({
  region: 'us-west-1',
  credentials: {
    accessKeyId: 'AKIAX53L4JN3HK5ZYV6K',
    secretAccessKey: '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',
  }
})