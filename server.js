const express = require('express');
const mustacheExpress = require('mustache-express');

// create the app
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("What's up port 3000!");
});
