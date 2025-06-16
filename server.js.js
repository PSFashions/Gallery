const express = require('express');
const path = require('path');
const app = express();

// Serve static files from "images" folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});