const fs = require('fs')
const path = require('path')
module.exports =  get = (url, req, res) => {
    originalPath = path.join(__dirname, '..', '/views')
    let file = url

    if(url == '/'){
        file = '/home'
    }
    
    try{
        return fs.readFileSync(originalPath+ file+'.html')

    }catch(err){
        return fs.readFileSync(originalPath+ '/default.html')
    }
}