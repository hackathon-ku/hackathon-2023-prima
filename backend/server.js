const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentSystem"
});

app.get('/student', (req, res) => {
    db.query("SELECT * FROM student", (err, result) => {
        if (err) {
            console.log(err);
        } else {    
            res.send(result);
        }   
    });
});

app.listen('5000', () => {
    console.log('server is run on port 5000')
})