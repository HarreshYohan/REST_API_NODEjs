const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config'); 

//Import route 
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);



//ROUTES
app.get('/',(req,res)=> {
    res.send('we are home')
});





//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true}, ()=>
console.log('Connected to DB')
 );


//How to we start Listen to the server

app.listen(3000);
