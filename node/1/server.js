const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/profile', (req, res) => {
    res.send('getting profile')
})

app.get('/', (req, res) => {
    res.send('getting root')
})
app.post('/profile', (req, res) => {
    console.log(req.body)
    const user = {
        name: 'tom'
    }
    res.send(req.body)
})

app.listen(3000);