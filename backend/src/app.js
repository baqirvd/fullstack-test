const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// TODO: mount your routes here
// const transactionRoutes = require('./routes/transactions');
// app.use('/api/transactions', transactionRoutes);

module.exports = app;
