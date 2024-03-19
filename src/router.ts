import express from 'express'

import {
  createUser,
  getUser,
  getUsers,
  loginUser
} from './users/user.controller'

import {
  getHaves,
  createHave,
  getHave,
  updateHave,
  deleteHave
}
from './have/have.controller'

import { validateUserRequest, validateRegister } from './users/user.middleware'
import { verifyToken } from './middleware/auth'
import { validateHave } from './have/have.middleware'
import { validateNeed } from './needs/need.middleware'

import {
  createNeed,
  deleteNeed,
  getNeed,
  getNeeds,
  updateNeed
}
from './needs/need.controller'


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
  .post(validateUserRequest, loginUser)
router.route('/register')
  .post(validateUserRequest, createUser)

// User routes
router.route('/users')
  .get(getUsers)
  .post(validateRegister, createUser)

router.route('/users/:id')
  .get(getUser)

// Need routes
router.route('/needs')
  .get(getNeeds)
  .post(validateNeed,createNeed)

router.route('/needs/:id')
  .get(getNeed)
  .put(updateNeed)
  .delete(deleteNeed)

// Have routes
router.route('/api/haves')
  .get(getHaves)
  .post(validateHave, createHave)

router.route('/api/haves/:id')
  .get(getHave)
  .put(updateHave)
  .delete(deleteHave)

export default router
