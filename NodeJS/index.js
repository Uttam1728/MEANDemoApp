const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db");
const employeecontroller = require("../NodeJS/controllers/employeecontroller");

// var app -> express()
var app = express();
app.use(bodyParser.json());

app.listen(3000,()=> console.log('Server is started at port 3000...'));

// app.use('/something',somecontroller)
app.use('/employees',employeecontroller);