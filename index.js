const {createServer} = require("node:http"); 

const {CreateandWritefile} =  require("./filesystem");
const {readfile} =  require("./filesystem");


const server = createServer((req, res) => {
CreateandWritefile();
readfile();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node js file system!\n');
  
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
