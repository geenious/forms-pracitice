const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

// create the app
const app = express();

// mustache hack
let mustacheInstance = mustacheExpress();
mustacheInstance.cache = null;
app.engine('mustache', mustacheInstance);

// app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/sayhello', function(req, res) {
  // console.log("I'm in your route handler");
  console.log('The body', req.body);
  res.render('hello', req.body);
});

app.listen(3000, function() {
  console.log("What's up port 3000!");
});
