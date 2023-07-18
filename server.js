const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const db = require('./config/db')


try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//router
const router = require('./routes/users');
app.use(router)

app.listen(PORT, () => console.log(`server is running  on port ${PORT}`))