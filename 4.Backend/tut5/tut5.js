const http = require('http');
const fs = require('fs');
const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync('home.html');
const form = fs.readFileSync('.form.html');
const contact = fs.readFileSync('.contact_us.html');
const about = fs.readFileSync('about_us.html');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    if(url == "home"){
        res.end(home);
    }
    else if(url == "form"){
        res.end(form);
    }
    if(url == "contact_us"){
        res.end(contact_us);
    }
    if(url == "about.us"){
        res.end(about_us);
    }
    else{
        res.statusCode = 404;
        res.end('<h1> 404 not found </h1>');
    }
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});