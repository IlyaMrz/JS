const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/profile', (req, res) => {
    res.send('getting profile')
})

app.get('/', (req, res) => {
    res.status(404).send('not found')
    // req.body
    // console.log(req.query) // localhost:3000/?name=bob&age=70 -> { name: 'bob', age: '70' }
    // req.header
    // req.params //  get('/:id', (req...,  localhost:3000/1234 -> {id:1234}
})
app.post('/profile', (req, res) => {
    console.log(req.body)
    const user = {
        name: 'tom'
    }
    res.send(req.body)
})

app.listen(3000);