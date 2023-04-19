const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//const port = 3000;
const port = 4200;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_database_username',
  password: 'your_database_password',
  database: 'your_database_name'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }

  console.log('Connected to database with ID: ' + connection.threadId);
});

app.use(bodyParser.json());
app.use(cors());

app.post('/add-document', (req, res) => {
  const document = req.body;

  const sql = 'INSERT INTO documents (employeeName, employeeId, department, documentName, documentId, documentLink) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [document.employeeName, document.employeeId, document.department, document.documentName, document.documentId, document.documentLink];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error adding document: ' + err.stack);
      res.status(500).send('Error adding document to database.');
      return;
    }

    console.log('Document added with ID: ' + result.insertId);
    res.status(200).send('Document added to database.');
  });
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
