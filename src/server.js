const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const configDB = require('./config/connectDB.js');
dotenv.config();

const app = express();
app.use(express.json());

configDB();
const port = process.env.port || 5000;
app.listen(() => console.log(`server listening on port ${port}`));




