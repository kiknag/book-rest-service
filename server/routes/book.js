const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all the book listing
router.get('/booklisting', bookController.listing);

// POST new book
router.post('/addbook', bookController.addBook);

// DELETE existing book
router.delete('/delete/:id', bookController.deleteBook);

// UPDATE existing book
router.put('/update/:id', bookController.updateBook);

module.exports = router;