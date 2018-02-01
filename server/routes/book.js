const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all the book listing
router.get('/booklisting', bookController.listing);

// POST new book
router.post('/addbook', bookController.addBook);

// DELETE existing book
router.delete('/book/:id', bookController.deleteBook)

module.exports = router;