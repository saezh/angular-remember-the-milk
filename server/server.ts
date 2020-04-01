import * as express from 'express';

const app = express();
app.use(express.json());

const items = ['Buy Eggs!', 'Milk', 'Bananas'];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  items.unshift(req.body.title);
  res.json(items);
});

app.delete('/items/:index', (req, res) => {
  items.splice(+req.params.index, 1);
  res.json(items);
});

app.listen(3000, () => {
  console.log('Server started');
});
