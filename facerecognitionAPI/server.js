const express = require('express');
const bP = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/Register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profileID = require('./controllers/profileID');


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '',
      database : 'smart-brain'
    }
  });

// db.select('*').from('users').then(data => {
//     console.log(data)
// });

const app = express();

app.use(bP.json());
app.use(cors());


app.get('/', (req, res) => {
    db.select('*').from('users')
    .then(i => {
        res.json(i)
    })
})

app.post('/signin', (req, res) => {signin.handlerSignin(req,res,db,bcrypt)})

app.post('/register', (req, res) => {register.handlerRegister(req,res,db,bcrypt)})

app.get('/profile/:id', (req, res) => {profileID.handlerProfileID(req, res, db)})

app.put('/image', (req, res) => {image.handlerImage(req,res,db)})

app.listen(3000, () => {
    console.log('app is running on port 3000.')
})

