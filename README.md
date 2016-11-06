# RealtimeMeasurementDemo

Demonstration how to use NodeJS with InfluxDb and Grafana to visualize NodeJS-Express Web Application for scalable application

# Prerequisite
- Grafana : http://grafana.org/download/
- InfluxDb : https://www.influxdata.com/downloads/

# Runnin InfluxDb
- Extract downloaded file to some folder
- Run "influxd"
- Go to influxdb web console : http://localhost:8083/
- Create influxdb user : CREATE USER "bigbears" WITH PASSWORD 'bigbears'
- Change it according to you code (if any)
- Create influxdb database: CREATE DATABASE "dev_hapiness"

# Running Grafana
- Extract downloaded file to some folder
- Run "bin/grafana-server"
- login with default username/password (admin/admin)
- Add influxdb data source
- Parameter as follows
  - Name : influx-default (or any name you want)
  - Default : checked
  - Type : InfluxDB
  - url : http://localhost:8086
  - Access : Direct
  - Database : dev_hapiness
  - User : bigbears
  - Password : bigbears
  - Defualt group by time : > 30s

# Checkout code from GitHub
- You know how to do it !!!

# Running Demonstration
- npm install
- node app.js