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
  .post(verifyToken, createNeed)
  .get(getNeeds)

router.route('/needs-zip')
  .post(verifyToken, getNeedsFromZip)

router.route('/needs-title')
  .post(verifyToken, getNeedsFromTitle)

router.route('/needs-description')
  .post(verifyToken, getNeedsFromDescription)

router.route('/needs/:id')
  .get(getNeed)
  .put(verifyToken, updateNeed)
  .delete(verifyToken, deleteNeed)

// Have routes
router.route('/api/haves')
  .get(getHaves)
  .post(createHave)

router.route('/api/haves/:id')
  .get(getHave)
  .put(updateHave)
  .delete(deleteHave)

export default router
