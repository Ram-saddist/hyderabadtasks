const http=require("http")
const url=require("url")
const port =5000
// http.createServer((req,res)=>{
//     res.write('Hello World!'); 
//   res.end(); 
// }).listen(8000); 


http.createServer((req,res)=>{
    const myUrl=url.parse(req.url).pathname
    if(myUrl==="/"){
        res.write("Iam bored")
        res.end()
    }
    else if(myUrl=="/user"){
        res.write("user api called")
        res.end()
    }
}).listen(port,()=>console.log(`working on port ${port}`))