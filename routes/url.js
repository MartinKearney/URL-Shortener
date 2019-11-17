const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/Url');

// @route       POST /api/url/shorten
// @desc        Create short URL
router.post('/shorten', async (req, res) => {
  // destructure only content of body of request
  const { longUrl } = req.body;

  const baseUrl = process.env.BASE_URL;

  // check validity of base url
  if (!validUrl.isUri(baseUrl)) {
    // bad request
    return res.status(400).json({ msg: 'Invalid base url' });
  }

  // generate code part i.e. the part that will come
  // after the base url
  // Is this required here? Better in 'else' clause below?
  const urlCode = shortid.generate();

  // check validity of long url i.e. the one sent by client
  if (validUrl.isUri(longUrl)) {
    // valid, so check db to see if it exists already
    try {
      // let url = await Url.findOne({longUrl:longUrl});
      let url = await Url.findOne({ longUrl });
      // if found then return the url (it will have
      // the various db fields)
      if (url) {
        res.json(url);
      } else {
        // not found so construct a short url
        const shortUrl = baseUrl + '/' + urlCode;
        // insert into db
        // first create instance
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });
        // what about default for 'date' field?
        // save to db
        // returns a promise but we don't need it
        await url.save();
        // return our new instance
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error!');
    }
  } else {
    // the long url is not valid
    return res.status(400).json({ msg: 'Invalid long url' });
  }
});

module.exports = router;
