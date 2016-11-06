var Influx = require('Influx')
    ,os = require('os')
    ,metric = require('../Influxdb');

exports.sendInterestMetrics = function(id){
  metric.interestData.writePoints([
      {
        measurement: 'interest',
        tags: { host: os.hostname() },
        fields: { id: id },
      }
    ]).catch(err => {
      console.error(`Error saving data to InfluxDB! ${err.stack}`)
    })
};

exports.sendCancelMetric = function(id){
  metric.cancelData.writePoints([
      {
        measurement: 'cancel',
        tags: { host: os.hostname() },
        fields: { id: id },
      }
    ]).catch(err => {
      console.error(`Error saving data to InfluxDB! ${err.stack}`)
    })
};

exports.sendPaymentMetric = function(id){
  metric.paymentData.writePoints([
      {
        measurement: 'payment',
        tags: { host: os.hostname() },
        fields: { id: id },
      }
    ]).catch(err => {
      console.error(`Error saving data to InfluxDB! ${err.stack}`)
    })
};

exports.sendBookingMetric = function(id){
  metric.bookingData.writePoints([
      {
        measurement: 'booking',
        tags: { host: os.hostname() },
        fields: { id: id },
      }
    ]).catch(err => {
      console.error(`Error saving data to InfluxDB! ${err.stack}`)
    })
};