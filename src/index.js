const express=require("express")
const app=express()
const port=4000
app.use(express.json())
// const bodyParser = require("body-parser");
// app.use(express.urlencoded());

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("hello world!...")
})

//post request for addition
app.post("/add",(req,res)=>{
    const num1=Number(req.body.num1)
    const num2=Number(req.body.num2)
    if(isNaN(num1)||isNaN(num2)){
        return res.send({status:"failure",message:"Invalid data types"})
    }
    const sum=num1+num2
    if(sum<-1000000 || sum>1000000){
        return res.send({status:"error",message:"overflow"})
    }
   res.send({status: "success", message: "The addition of given numbers",sum})
})

//post request fordifferencestraction
app.post("/sub",(req,res)=>{
    const num1=Number(req.body.num1)
    const num2=Number(req.body.num2)
    if(isNaN(num1)||isNaN(num2)){
        return res.send({status:"failure",message:"Invalid data types"})
    }
    const difference=num1-num2
    if(difference<-1000000 ||difference>1000000){
        return res.send({status:"error",message:"overflow"})
    }
    res.send({status: "success", message: "the difference of given two numbers",difference})
})

//post request for multiply
app.post("/multiply",(req,res)=>{
    const num1=Number(req.body.num1)
    const num2=Number(req.body.num2)
    if(isNaN(num1)||isNaN(num2)){
        return res.send({status:"failure",message:"Invalid data types"})
    }

    const multiply=num1*num2
    if(multiply<-1000000){
        return res.send({status:"error",message:"underflow"})
    }
    if(multiply>1000000){
        return res.send({status:"error",message:"overflow"})
    }
    res.send({status: "success",  message: "The product of given numbers",multiply})
})

//post request for divsion
app.post("/divide",(req,res)=>{
    const num1=Number(req.body.num1)
    const num2=Number(req.body.num2)
    if(isNaN(num1)||isNaN(num2)){
        return res.send({status:"failure",message:"Invalid data types"})
    }
    if(num2===0){
        return res.send({status:"failure",message:"Cannot divide by zero"})
    }
    const div=num1/num2
    res.send({status: "success",  message: "The division of given numbers",div})

})


app.listen(port,()=>{
    console.log(`listenning at ${port}`)
})