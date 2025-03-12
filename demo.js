import express from "express"; //import express from the installed express package

const app = express(); //initialize an instance of express

app.get("/users", (req, res)=>{
    res.json({name : "karunakar"})
})

app.listen(3000, ()=>{
    console.log(`server is running on http://localhost:${3000}`)
})