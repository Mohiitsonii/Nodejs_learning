const http =require('http')

const port=process.env.PORT || 3000 ;

console.log(port)

const server =http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is Mohit soni </h1>')
})

server.listen(port,()=>{
console.log(`server is listing on port ${port}`)
})