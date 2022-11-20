//Http Server Request
const Http = require('http');

const Server =Http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('Hello Word');
   }else if(req.url === '/about'){
    res.end('Hello About');
   }else{
   res.end(`<h1>Hello Opps</h1>
   <p>We can't Seem The Page Write Now </p>
   <a href="/">back To Home </a>`)
   }
})

Server.listen(5000);