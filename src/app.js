require('dotenv').config();
const express = require('express');
const app = express();
const { tracking_get } = require('./controllers/trackingController');

app.get('/api/:code', tracking_get);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listen on port ${process.env.PORT || 3000}...`);
});
