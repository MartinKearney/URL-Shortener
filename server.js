const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Initialise middleware
// allows us to accept json data into the API
// **Look this up!**
app.use(express.json({ extended: false }));

// Define the api endpoints
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// The envirnoment nariable will be used in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
