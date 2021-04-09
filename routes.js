const fs = require('fs')

const routes = (req, res) => {
    originalPath = __dirname+ '/views'
    let file = req.url
    const url = []
    if(req.url == '/'){
        file = '/home'
    }
    let fileRender, fileRenderDefault
    try{
        fileRender = fs.readFileSync(originalPath+ file+'.html')

    }catch(err){
        fileRenderDefault = fs.readFileSync(originalPath+ '/default.html')
    }
    url['/'] = fileRender
    url['/test'] = fileRender
    url['/hello'] = fileRender
   
    
    res.end(url[req.url] || fileRenderDefault)

}
module.exports = routes