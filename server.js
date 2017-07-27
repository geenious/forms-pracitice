const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

// create the app
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/sayhello', function(req, res) {
  console.log("I'm in your route handler");
  console.log('The body', req.body);
  res.json(req.body);
});

app.listen(3000, function() {
  console.log("What's up port 3000!");
});
