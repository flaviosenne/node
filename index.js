const http = require('http')
const routes = require('./routes')

const proxy = http.createServer(routes)

module.exports = proxy

