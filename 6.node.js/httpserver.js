const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
   res.statusCode = 200;
   res.setHeader('content-type', 'text/html');
   res.end('<h1>This is a heading </h1><P>life a journey travelled on the higway of time.Therefore,time is precious');
});

server.listen(port,()=>{
    console.log(`server is listing on port ${port}`);
}); 