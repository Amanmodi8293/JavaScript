const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.setHeader('content-type', 'text/html');
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is a heading </h1><P>life a journey travelled on the higway of time.Therefore,time is precious');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>This is a about heading </h1><P>This is a about page of server</P>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.php');
        res.end(data.toString());
    }
    else{
        // res.aman(); 
        res.statusCode = 404;
        res.end('<h1>The page is not found</h1>');
    }
});

server.listen(port,()=>{
    console.log(`server is listing on port ${port}`);
}); 