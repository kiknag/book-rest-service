const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/addbook', bookController.addBook);

module.exports = router;