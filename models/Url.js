const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now }
});

// May need to add 'required' and 'unique' options to some of
// the above fields

// Check that a collection called 'urls' is created

module.exports = mongoose.model('Url', urlSchema);
