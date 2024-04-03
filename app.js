import express from 'express';

import { reactJsxEngine } from './lib/react-engine.js';

const GOALS = [];

const app = express();

app.engine('js', reactJsxEngine);

app.set('views', './views');
app.set('view engine', 'js');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/goals', (req, res) => {
  res.render('goals', { goals: GOALS });
});

app.post('/goals', (req, res) => {
  const { goal } = req.body;
  GOALS.push(goal);
  res.render('goals', { goals: GOALS }); // res.render() instead of res.redirect() because we're using HTMX
});

app.get('/', (req, res) => {
  res.redirect('/goals');
});

app.listen(3000);
