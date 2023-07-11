const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app = express();
const PORT = 2000;

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

const myusername = 'admin'
const mypassword = 'admin'

// a variable to save a session
var session;

// cookie parser middleware
app.use(cookieParser());

//session middleware
app.use(sessions({
    secret: "thisismysecrctekey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href='/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome ${session.userid} <a href='/logout'>click to logout</a>`);
    }
    else{
        res.sendFile("views/invalid.html",{root:__dirname})
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});


app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));