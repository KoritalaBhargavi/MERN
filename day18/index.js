const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes');

const app = express();

const url = 'mongodb://localhost:27017/27017'; 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});

app.use('/users',userRoutes);