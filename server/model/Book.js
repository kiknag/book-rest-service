const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongodbErrorHandler = require('mongoose-mongodb-errors');
mongoose.Promise = global.Promise;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

bookSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Book', bookSchema);