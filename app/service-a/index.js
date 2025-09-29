const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send({ status: 'OK from service-a' });
});

const os = require('os');

app.get('/', (req, res) => {
  const hostname = os.hostname();
  const currentTime = new Date().toLocaleString();

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Service A</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Hello from <strong>Service A</strong>!</h1>
          <p><strong>Hostname:</strong> ${hostname}</p>
          <p><strong>Time:</strong> ${currentTime}</p>
        </div>
      </body>
    </html>
  `);
});


app.listen(port, () => {
  console.log(`service-a listening on port ${port}`);
});
