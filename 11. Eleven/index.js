require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const port = process.env.PORT || 4000
const app = express();
const User =require("./model/user.js")
const bcrypt=require("bcryptjs")

app.use(express.json());

// importing user context
const User = require("./model/user");

// Register
app.post("/register", async(req, res) => {
// our register logic goes here...
const {first_name,email,password,}=req.body

try{
    if(!(first_name && email && password))
        res.status(400).send("Provide all the values")

    const oldUser=await User.find({email})

    if(oldUser)
        return res.status(409).send("User already Exist.")

    encryptedpassword=await bcrypt.hash(password,10)

    const user=await User.create({
        first_name, email:email.toLowerCase(), password:encryptedpassword
    })

    const token=jwt.sign(
        {user_id:user._id,email},
        process.env.TOKEN_KEY,
        {expiresIn:"2h"}
    )
    user.token=token
    res.status(201).json(user)

}catch(err){
    console.log(err)
}

});

// Login
app.post("/login", (req, res) => {
// our login logic goes here
});

app.listen(port,()=>console.log("sunning on ",port))
