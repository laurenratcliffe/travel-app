const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const uri = process.env.MONGO_URL
const userRoute = require('./routes/users')
const pinRoute = require('./routes/pins')

app.use(express.json())

async function connect() { 
    try { 
        await mongoose.connect(uri);
        console.log('connected to mongoDB'); 
    } catch (error) { 
        console.log(error)
    }
}

connect();

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

const app = express();
app.listen(8800, () => { 
    console.log('backend server is running')
})


