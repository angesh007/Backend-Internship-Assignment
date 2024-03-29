const express = require('express');
const swaggerDef = require('./swagger/swaggerDef');
const app = express();

// Setup Swagger documentation
app.use('/api-docs', swaggerDef.serve, swaggerDef.setup);

// Define a route handler for the root path ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Food Delivery App!');
});

// Your other middleware and route setups

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
