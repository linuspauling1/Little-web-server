let fs = require('fs')
let http = require('http')
http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'})
    console.log('Success!')
    res.end('Booo!')
}).listen(port=80)