const fs = require("fs");

// const index =fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

// server.get("/", (req, res) => {
//   // res.send("hello")
//   // res.sendFile('C:\Users\Deepak\Desktop\Learning Node JS from Coder Dost\index.html')
//   res.json(products);
// });


//Middleware

//This is a built in middleware which uses to read the body which is in JSON format
server.use(express.json());

// server.use(express.urlencoded());

server.use(express.static('public'));

server.use((req, res, next) => {
  console.log(req.get('User-Agent'),req.method, req.ip, req.hostname)
  next()
  
});

// const auth = (req,res,next)=>{
//     // console.log(req.query)

//     if(req.query.password === '123'){
//         next();
//     }else{
//         res.sendStatus(401);
//     }
// }
const auth = (req,res,next)=>{
    // console.log(req.query)

    if(req.body.password === '123'){
        next();
    }else{
        res.sendStatus(401);
    }
}

// server.use(auth)

// API - ENDPOINT - ROUTE
server.get("/", auth,(req, res) => {
  res.json({ type: "GET" });
});
server.post("/",auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(8080, () => {
  console.log("server started");
});
