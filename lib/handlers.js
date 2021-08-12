const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');

exports.about = (req, res) =>
  res.render('about', { fortune: fortune.getFortune() });

exports.sectionTest = (req, res) => res.render('section-test');

exports.notFound = (req, res) => res.render('404');

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500');
/* eslint-enable no-unused-vars */


// function home(req, res) {
//   res.render('home');
// }

// function about(req, res) {
//     res.render('about', { fortune: fortune.getFortune() });
// }

// function notFound(req, res) {
//   res.render('404 Not Found');
// }

// function serverError(err, req, res) {
//   res.render('500');
// }
  
// module.exports = {
//   home,
//   about,
//   notFound,
//   serverError
// }