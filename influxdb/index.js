var Influx = require('Influx')
    ,os = require('os');

// Metrics Definition
exports.responseTime = new Influx.InfluxDB({
  host: 'localhost',
  database: 'dev_happiness',
  schema: [
    {
      measurement: 'response_times',
      fields: {
        path: Influx.FieldType.STRING,
        duration: Influx.FieldType.INTEGER
      },
      tags: [
        'host',
        'url'
      ]
    }
  ]
})

exports.interestData = new Influx.InfluxDB({
  host: 'localhost',
  database: 'dev_happiness',
  schema: [
    {
      measurement: 'interest',
      fields: {
        id: Influx.FieldType.INTEGER
      },
      tags: [
        'host',
      ]
    }
  ]
})

exports.bookingData = new Influx.InfluxDB({
  host: 'localhost',
  database: 'dev_happiness',
  schema: [
    {
      measurement: 'booking',
      fields: {
        id: Influx.FieldType.INTEGER
      },
      tags: [
        'host',
      ]
    }
  ]
})

exports.cancelData = new Influx.InfluxDB({
  host: 'localhost',
  database: 'dev_happiness',
  schema: [
    {
      measurement: 'cancel',
      fields: {
        id: Influx.FieldType.INTEGER
      },
      tags: [
        'host',
      ]
    }
  ]
})

exports.paymentData = new Influx.InfluxDB({
  host: 'localhost',
  database: 'dev_happiness',
  schema: [
    {
      measurement: 'payment',
      fields: {
        id: Influx.FieldType.INTEGER
      },
      tags: [
        'host',
      ]
    }
  ]
})
