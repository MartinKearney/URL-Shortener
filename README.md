# URL-Shortener

This is a full-stack MERN application and can be viewed at https://intense-wildwood-80264.herokuapp.com

To run in development mode:

1. Clone or download the project to your machine
2. At a terminal prompt, in the root of the project, enter `npm install`
3. Create a blank `.env` file in the root
4. In this file set Mongo_URI = 'mongo db connection string'
5. Also set Base_URL = http://localhost:5000
6. Finally, at the terminal, enter `npm run dev`

The application takes an input URL from a user and returns a shortened version of it.
The user can then copy this link to their clipboard to enable pasting into other files etc.
The application, upon receiving the input URL, checks to see if there is a corresponding
entry already in the database. If it does exist then the shorter version is returned.
If it doesn't exist then a new record is added to the database and the corresponding
shorter version is again returned.

Technologies Used:

- React
- Node.js
- MongoDB

Dependencies:

- mongoose
- express
- dotenv
- shortid
- valid-url
- axios
- react-copy-to-clipboard

Development Dependencies:

- nodemon
- concurrently
