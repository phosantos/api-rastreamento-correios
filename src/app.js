const express = require('express');
const app = express();
const { tracking_get } = require('./controllers/trackingController');

app.get('/api/:code', tracking_get);

app.listen(3000, () => {
  console.log('Server listen on port 3000...');
});
