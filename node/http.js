const { Socket } = require('dgram');
const http = require('http');

// const server=http.createServer();

const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write('Hello worldd');
        res.end();
    }
    if(req.url=='/api'){
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});

server.listen(3000);
// server.on('connection',(Socket)=>{
//     console.log('new connection')
// })
console.log('Listening on port 3000....')