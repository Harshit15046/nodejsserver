const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.header);

    res.setHeader('Content-Type','text/html');

    let filepath;
    switch(req.url)
    {
        case '/home':
            res.write('<html>');
    res.write('<head><title>My first Page</title></head');
    res.write('<body><h1>hello, from my node js server</h1></body');

    res.write('</html>');
       break;

       case '/about':
        res.write('<html>');
      res.write('<head><title>My about Page</title></head');
     res.write('<body><h1>hello, from  server</h1></body');

      res.write('</html>');
           break;
    }
res.end();
   
});
server.listen(2000);
