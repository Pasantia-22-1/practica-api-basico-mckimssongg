const express = require('express');
const router = express.Router(); //metodo router
const controllers = require('../controllers/task.ctl.js');
router.get('/home',controllers.getHome) //ruta de tipo get en router
router.get('/contac',controllers.getContac)
router.get('/profile',controllers.getPrifle)
router.get('/singIn',controllers.getSingIn)
router.get('/singUp',controllers.getSingUp)

module.exports = router;