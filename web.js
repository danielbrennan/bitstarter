var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('index.html');

app.get('/', function(request, response) {
  fs.readFileSync('index.html');
  response.send(buf.toString('utf8',0,26);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
