import express from 'express'

import {
  createUser,
  getUser,
  getUsers,
  loginUser
} from './users/user.controller'

import {
  getHaves,
  createHaves,
  getHave,
  updateHave,
  deleteHave
}
from './have/have.controller'

import { verifyToken } from './middleware/auth'


const router = express.Router()

router.use((req, res, next) => {
  console.log(`${req.method} - ${req.url} ${new Date()} `)
  if (req.method === 'POST') {
    console.log('request body: ')
    console.log(JSON.stringify(req.body, null, 2))
  }
  next()
})

router.route('/login')
  .post(loginUser)
router.route('/register')
  .post(createUser)

// User routes
router.route('/users')
  .get(getUsers)
  .post(createUser)

router.route('/users/:id')
  .get(getUser)

// Have routes
router.route('/api/haves')
  .get(getHaves)
  .post(createHaves)

router.route('/api/haves/:id')
  .get(getHave)
  .put(updateHave)
  .delete(deleteHave)

export default router
