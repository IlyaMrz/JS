const app = require('http')
    .createServer((req,res) => res.send('oh hi'));

app.listen(3000, ()=>{
    console.log('sever listening on port 3000')
});

console.log(process.env)