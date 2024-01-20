import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8022;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  console.log(req.ip)
  res.send('wwww');
});


// // POST request to add a new item
// app.post('/api/items', (req, res) => {
//   const newItem = req.body;

//   if (newItem && newItem.name) {
//     // Generate a unique ID for the new item
//     newItem.id = data.length + 1;
//     data.push(newItem);

//     res.status(201).json(newItem);
//   } else {
//     res.status(400).json({ error: 'Invalid data format' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
