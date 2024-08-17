const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dbConfig = require('./admin/admin.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});
app.get('/', (req, res) => {
  res.json({"message": "Hello World Chalapathi"});
});
const userRoutes = require('./src/route/user.route')
app.use('/api/user',userRoutes)
app.listen(4000, () => {
  console.log(`Node server is listening on port `);
});

