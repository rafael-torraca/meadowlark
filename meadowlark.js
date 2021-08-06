const express = require('express');
const expressHandlebars = require('express-handlebars');


const handlers = require('./lib/handlers');

const app = express();

const PORT = process.env.PORT || 3000;



// configura o view engine handlebars esse default eh a pagina handlebars main da views/layouts
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.get('/about/contact', (req, res) => {
  res.type('text/plain');
  res.send('About Contact');
});

app.get('/about/directions', (req, res) => {
  res.type('text/plain');
  res.send('About Directions');
});

// 404 not found personalized
app.use(handlers.notFound);

// 500 error personalized
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT}`);
  });
} else {
  module.exports = app;
}
