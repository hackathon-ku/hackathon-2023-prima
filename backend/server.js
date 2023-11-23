const express = require('express');
const fs = require('fs/promises');
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(express.json())
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
});


app.get('/maps/name', async (req, res) => {
  try {
    const query = req.query['name'];
    const data = await fs.readFile('./data/maps.json', 'utf-8');
    const jsonData = JSON.parse(data);

    const result = jsonData.find((item) => item.name === query);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Map not found' });
    }
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', async (req, res) => {
  try { 
    const data = req.body;
    console.log(data);
    const student = await fs.readFile('./data/students.json', 'utf-8');
    const jsonData = JSON.parse(student);
    for (let i = 0; i< jsonData.length; i ++) {
      if (jsonData[i]['student_id'] === data['student_id']){
        if (jsonData[i]['password'] === data['password']){
          console.log(jsonData[i]);
          res.send(jsonData[i]);

        }
      }
    }
    res.status(403);
  }catch (err){
    res.send(err).status(500)
  }
}) 

app.listen(5001, () => {
  console.log(`Server listening at http://localhost:5001`);
});