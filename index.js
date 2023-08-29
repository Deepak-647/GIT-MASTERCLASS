const http = require('http');

const data = {age:5}
const server =http.createServer((req,res)=>{
//request url
console.log(req.url)
    console.log("Server started")
    res.setHeader('Dummmy','dummyvalue')
    // res.end('heloo');
    res.setHeader('Content-Type','application/json')
res.end(JSON.stringify(data));
})

server.listen(8080);