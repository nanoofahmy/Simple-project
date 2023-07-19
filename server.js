const express = require('express')
const bodyParser = require('body-parser')

const db = require('./config/db')
const router = require('./routes/users');

const app = express()
const PORT = process.env.PORT || 5000;

  try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`server is running  on port ${PORT}`))