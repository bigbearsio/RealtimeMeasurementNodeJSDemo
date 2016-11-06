/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override')
  ,Influx = require('Influx')
  ,os = require('os')
  ,metric = require('./Influxdb')
  ,customMiddleware = require('./middleware/requestMeasure');

var app = express();

app.set('port', process.env.PORT || 9000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// Custom Middleware to measure request
app.use(customMiddleware.measurement);

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

// HTML views
app.get('/', routes.index);
app.get('/product', routes.product);
app.get('/cart', routes.cart);

// API which push metrics
app.post('/cancel/:id', routes.cancel);
app.post('/interest/:id', routes.interest);
app.post('/payment/:id', routes.payment);
app.post('/booking/:id', routes.booking);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
