const express = require('express');
const expressHandlebars = require('express-handlebars');

const handlers = require('./lib/handlers');
const weatherMiddleware = require('./lib/middleware/weather');

const app = express();


// engine config
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  helpers: {
    section: function (name, options) {
      if (!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    },
  },
}));

app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// middleware
app.use(weatherMiddleware);

// routes
app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/section-test', handlers.sectionTest);
app.use(handlers.notFound);
app.use(handlers.serverError);


// port / start
const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT}`);
  });
} else {
  module.exports = app;
}
