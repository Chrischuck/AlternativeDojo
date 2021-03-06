var path = require('path');
var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/vendor.chunkhash.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname,  '/dist/vendor.chunkhash.bundle.js'));
})

app.get('/client.chunkhash.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname,  '/dist/client.chunkhash.bundle.js'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,  '/dist/index.html'));
});


app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("❤️  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});