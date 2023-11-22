const express = require('express');
const fs = require('fs/promises');
const cors = require('cors');
const app = express();
app.use(cors());


app.get('/students', async (req, res) => {
  try {
    const data = await fs.readFile('./data/students.json', 'utf-8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
});
app.get('/subjects', async (req, res) => {
  try {
    const data = await fs.readFile('./data/subjects.json', 'utf-8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`);
});