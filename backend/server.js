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

app.get('/students/id', async(req, res) => {
  try {
    const query = req.query['id'];
    console.log(query);
    const data = await fs.readFile('./data/students.json', 'utf-8');
    const jsonData = JSON.parse(data);
    for (let i = 0; i< jsonData.length; i ++) {
      if (jsonData[i]['student_id'] === query){
        res.status(200).send(jsonData[i]);
      }
    }
    res.status(400)
  } catch (error) {

  }
});

app.get('/maps', async(req, res) => {
  try {
    const query = req.query['id'];
    const data = await fs.readFile('./data/maps.json', 'utf-8');
    const jsonData = JSON.parse(data);
    for (let i = 0; i< jsonData.length; i ++) {
      if (jsonData[i]['id'] === parseInt(query)){
        res.status(200).send(jsonData[i]);
      }
    }
    res.status(400)
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
})

app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`);
});