var Influx = require('Influx')
    ,os = require('os')
    ,metricSender = require('../library/metricSender');

// View Methods

exports.index = function(req, res){
  res.render('index');
};

exports.cart = function(req, res){
  res.render('cart');
};

exports.product = function(req, res){
  res.render('product');
};

// API Methods
exports.interest = function(req, res){
  metricSender.sendInterestMetrics(req.params.id)
  res.sendStatus(200)
};

exports.cancel = function(req, res){
  metricSender.sendCancelMetric(req.params.id)
  res.sendStatus(200)
};

exports.payment = function(req, res){
  metricSender.sendPaymentMetric(req.params.id)
  res.sendStatus(200)
};

exports.booking = function(req, res){
  metricSender.sendBookingMetric(req.params.id)
  res.sendStatus(200)
  
};