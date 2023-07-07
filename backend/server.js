// This is the main file that will run the server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware is code that runs before your routes, it is used to modify the request
app.use(express.json());

// Routes, these are the endpoints that the frontend will hit to get data
const recipeRoutes = require('./routes/recipes');
app.use('/recipes', recipeRoutes);

const searchRoutes = require('./routes/search');
app.use('/search', searchRoutes);


// Start server by listening on a port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});