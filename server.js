var express = require('express');
var app = express();
var path = require('path');

app.use(require('connect-assets')({
  
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.logger('dev'));

app.get('/', function(req, res){
  res.render("index");
});

app.listen(8090);
console.log('Listening on port 8090');




