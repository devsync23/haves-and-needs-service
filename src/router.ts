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
  getNeedsFromZip,
  getNeedsFromTitle,
  updateNeed,
  getNeeds,
  getNeedsFromDescription
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
  .post(verifyToken, validateHave, createNeed)
  .get(getNeeds)

router.route('/needs-zip')
  .get(verifyToken, getNeedsFromZip)

router.route('/needs-title')
  .get(verifyToken, getNeedsFromTitle)

router.route('/needs-description')
  .get(verifyToken, getNeedsFromDescription)

router.route('/needs/:id')
  .get(getNeed)
  .put(verifyToken, updateNeed)
  .delete(verifyToken, deleteNeed)

// Have routes
router.route('/haves')
  .get(getHaves)
  .post(verifyToken, validateHave, createHave)

router.route('/haves/:id')
  .get(getHave)
  .put(verifyToken, updateHave)
  .delete(verifyToken, deleteHave)

export default router
