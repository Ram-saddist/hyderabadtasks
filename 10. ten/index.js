const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const port=5000;

let studentsList=require("./studentsList.js")

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Default route Checking")
})

app.get("/students",(req,res)=>{
    res.json(studentsList)
})

app.post("/add-student",(req,res)=>{
    const {id,name,section,city}=req.body;
    const newStudent={
        id,name,section,city
    }
    console.log("before",studentsList)
    studentsList.push(newStudent)
    console.log(studentsList)
    res.status(200).json(studentsList)
})

app.put("/update-student/:id",(req,res)=>{
    const id=req.params.id;
    const {name}=req.body;
    console.log(req.body,req.params);
    const updatedStudents=studentsList.map((std)=>{
        if(std.id===id){
            return {...std,name:name}
        }
        else return std
    })
    studentsList=updatedStudents
    console.log(studentsList)
    res.status(202).json(studentsList)
})

app.delete('/remove/:id',(req,res)=>{
    const id=req.params.id;
    const newStudnets=studentsList.filter((std)=>{
       return std.id!==id
    })
    studentsList=newStudnets
    console.log(studentsList)
    return res.status(200).json(studentsList)
})


app.listen(port,()=>console.log(`running port ${port}`))