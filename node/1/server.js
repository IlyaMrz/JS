const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('ueeee use foo')
    next();
})

app.get('/', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'bein happy'
    }
    res.send(user)
})

app.listen(3000);