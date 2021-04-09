const server = require('./index')
const port = 3030

server.listen(port, 'localhost', () => {
    console.log('server runing in port', port)
})