var Influx = require('Influx')
    ,os = require('os')
    ,metric = require('../Influxdb');

exports.measurement = function(req, res, next) {
  const start = Date.now()
  res.on('finish', () => {
    const duration = Date.now() - start
    metric.responseTime.writePoints([
      {
        measurement: 'response_times',
        tags: { host: os.hostname(),url: req.path },
        fields: { duration, path: req.path },
      }
    ]).catch(err => {
      console.error(`Error saving data to InfluxDB! ${err.stack}`)
    })
    console.log(`GLOBAL METRIC: Request to ${req.path} took ${duration}ms`);
  })
  return next()
};