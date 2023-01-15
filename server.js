const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  res.statusCode = 200;
  const fileHtml = fs.readFileSync("index.html");

  if(req.url.startsWith("/static")){

  let path = req.url.split("/");
  const folder = path[1];
  const asset = path[2];

  let extension = asset.split(".")[1];


  if(extension === "css") res.setHeader("Content-Type", "text/css");

  if(extension === "jpeg") res.setHeader("Content-Type", "image/jpeg");

  let fileOther = fs.readFileSync(`./${folder}/${asset}`);
  return res.end(fileOther);

  }

  res.setHeader("Content-Type", "text/html");
  return res.end(fileHtml);


});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
