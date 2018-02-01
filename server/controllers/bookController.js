const mongoose = require('mongoose');
require('../model/Book');
const Book = mongoose.model('Book');

// Book listing page
exports.addBook = async (req, res) => {
  console.log(req.body);
  try {
    const newEntry = await (new Book(req.body)).save();
  } catch(e) {
    return res.json({ status: 'Item with the same name is already added!' });
  }
  res.json({ status: 'New entry added!' });
};

// List all books
exports.listing = async(req, res) => {
  const listing = await Book.find({});
  res.json(listing);
};

exports.deleteBook = (req, res) => {

};

// TODO: Certain book route (GET)
// TODO: Add new book route (POST)
// TODO: Delete existing book (GET/DELETE)
// TODO: Update existing book (POST/PUT/UPDATE) 