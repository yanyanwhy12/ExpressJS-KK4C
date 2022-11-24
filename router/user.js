const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')
router.get('/user', usercontroller.index)
let users = [
  {id: 1, nama: "Bangjoule", email: "epiczakung17@gmail.com"},
  {id: 2, nama: "Zaen", email: "Zaeputra@gmail.com"},
  {id: 3, nama: "Kakvela", email: "Vel@gmail.com"}
]


router.get('/users', usercontroller.index )

router.get('/user/:id', usercontroller.show)


  router.post('/user', usercontroller.store)
  
  router.put('/user/:id', usercontroller.update)
  
  router.delete('/user/:id', usercontroller.delete)

  module.exports =router