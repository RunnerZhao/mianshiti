console.log(process.pid)

const http = require('http')
const server = http.createServer((req,res) =>{
    if (req.url == '/get-sum'){
        console.info('主进程id',process.pid)
        res.send("222")
    }
})
server.listen(3000,()=>{
    console.info("localhost  3000")
})