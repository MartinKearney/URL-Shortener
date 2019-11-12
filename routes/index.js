const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route       GET /:code
// @desc        Redirect to original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      // if found in db then redirect there
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ msg: 'No url found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error!' });
  }
});

module.exports = router;
