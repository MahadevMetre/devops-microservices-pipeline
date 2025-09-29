const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send({ status: 'OK from service-a' });
});

app.get('/', (req, res) => {
  res.send('Hello from service-a');
});

app.listen(port, () => {
  console.log(`service-a listening on port ${port}`);
});
