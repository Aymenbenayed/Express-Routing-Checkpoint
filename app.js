const express=require("express")
const app=express()
const port= process.env.PORT || 5001

// Middleware auth
const auth=require("./Midelware/auth")
app.use(auth)
// middleware express.static
app.use(express.static('public'))


app.listen(port, (err)=>{
    err? console.log(err):
    console.log(`server is running in port ${port}`)
})