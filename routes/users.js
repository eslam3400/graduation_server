const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);

module.exports = router;