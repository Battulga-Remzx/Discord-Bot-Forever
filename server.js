const express = require('express');
const app = express();
const port = 3000; // Port your server will run on

// Middleware for parsing JSON data
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello, World! The server is running.');
});

// Example of a POST route
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: 'Data received successfully!',
    data: { name, age }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
