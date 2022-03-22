//install express server

const express = require("express");
const path = require("path");

const app = express();


app.use(express.static("./dist/portafolioAngular"));

app.get("/*",(req,res)=>
  res.sendFile("index.html" , {root: "dist/portafolioAngular/"}),);

  app.listen(process.env.PORT || 8080);
