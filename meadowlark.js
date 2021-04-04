const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;


const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs",
  "Do not fear what you don't know",
  "You will have a pleasant surprise",
  "Whenever possible, keep it simple"
]


// configura o view engine handlebars esse default eh a pagina handlebars main da views/layouts
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {fortune: randomFortune});
});

app.get('/about/contact', (req, res) => {
  res.type('text/plain');
  res.send('About Contact');
});

app.get('/about/directions', (req, res) => {
  res.type('text/plain');
  res.send('About Directions');
});

// 404 not found personalized
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// 500 error personalized
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('500');
});

app.listen(PORT, () => console.log(
  `Express started on http://localhost:${PORT}`
));

