const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});

// A collection called 'urls' will be created in MongoDB
module.exports = mongoose.model('Url', urlSchema);
