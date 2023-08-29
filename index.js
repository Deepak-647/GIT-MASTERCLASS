const http = require('http');
const fs =require('fs')

const index =fs.readFileSync('index.html','utf-8')
const data = {age:5}
const server =http.createServer((req,res)=>{
//request url
console.log(req.url)

    console.log("Server started")
    res.setHeader('Dummmy','dummyvalue')
    // res.end('heloo');

    res.end(index);
})

server.listen(8080);