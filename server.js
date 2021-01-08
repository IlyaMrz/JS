const app = require('http')
    .createServer((req,res) => res.send('oh hi'));

const PORT = process.env.PORT    
app.listen(PORT, ()=>{
    console.log(`sever listening on port ${PORT}`);
});

console.log(PORT)

// launch in bash "PORT=3000 node server.js"
