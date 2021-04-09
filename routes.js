const fs = require('fs')
const get = require('./methods/get')
const post = require('./methods/post')

const routes = (req, res) => {

    const { method } = req;

    const url = []

    const pageDefault = fs.readFileSync(__dirname+ '/views/default.html');
    switch (method) {
        case 'POST':
            url['/'] = post('/', req, res)
            url['/client'] = post('/client', req, res)

            res.end(url[req.url] || pageDefault)
            break;

        case 'GET':
            url['/'] = get('/', req, res)
            url['/test'] = get('/test', req, res)
            url['/hello'] = get('/hello', (req, res))

            res.end(url[req.url] || pageDefault)
            break;

        case 'PUT':
            res.end("atualizado")
            break;

        case 'DELETE':
            res.end("deletado" || pageDefault)
            break;

        default: res.end("nada encontrado" || pageDefault);

    }



}
module.exports = routes