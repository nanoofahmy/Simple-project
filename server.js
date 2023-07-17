const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const db = require('./config/db')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  require('./routes/index')(app);


app.listen(PORT, () => console.log(`server is running  on port ${PORT}`))