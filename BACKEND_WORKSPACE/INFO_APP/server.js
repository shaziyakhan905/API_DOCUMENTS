require('dotenv').config();
const express = require('express'); // import {express} from 'path'
const app = express();
const userRoutes = require('./routes/userRoutes');
// Middleware to parse JSON body
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});
app.use('/users', userRoutes);


// 404 Not Found
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});