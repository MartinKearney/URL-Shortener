const express = require('express');
const connectDB = require('./db_config/db');
const path = require('path');

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

// Serve static assets in production i.e. React
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  // Set catch all route
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// The envirnoment variable will be used in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
