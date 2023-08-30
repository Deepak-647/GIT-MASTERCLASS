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
server.use((req, res, next) => {
  console.log(req.get('User-Agent'),req.method, req.ip, req.hostname)
  next()
  
});

// API - ENDPOINT - ROUTE
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});
server.post("/", (req, res) => {
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
