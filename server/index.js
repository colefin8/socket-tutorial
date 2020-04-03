require('dotenv').config();
const express = require('express'),
app = express(),
socket = require('socket.io'),
session = require('express-session');
const {SERVER_PORT, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(express.static(`${__dirname}/../public`))
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}))



const port = SERVER_PORT || 4040;
const server = app.listen(port, ()=> {
    console.log(`Server on ${port}`)
})

