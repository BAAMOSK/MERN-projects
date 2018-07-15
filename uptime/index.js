const http = require('http');
const url = require('url');

const server = http.createServer(function(req,res) {

    let parsedUrl = url.parse(req.url,true);
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/\/+|\+$/g,'');
    
    let queryStringObject = parsedUrl.query;

    let method = req.method.toLowerCase();

    let headers = req.headers;

    res.end('Hello Tee\n');
    console.log('Request recieved with these headers: ',headers);
});

server.listen(3000,function(){
    console.log('The server is listening on port 3000');
});
