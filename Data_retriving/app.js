const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true })

require('dotenv').config();
var con = mysql.createConnection({
    'host': process.send.DATABASE_HOST,
    'user': process.env.DATABASE_USER,
    'password': process.env.DATABASE_PASSWORD,
    'database': process.env.DATABASE_NAME
})

con.connect((err) => {
    if (err) throw err;
    console.log('Connected Successfully....')
})

console.log(process.env.DATABASE_NAME);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/login',(req,res)=>{
    res.send(req.body)
})
app.listen(port, (req, res) => {
    console.log('Server is running in port 3000')
})