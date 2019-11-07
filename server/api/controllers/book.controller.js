const Book = require('../../models/book.model');

module.exports.index = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).send('server not found');
  }
}