var now = new Date();
var heure= now.getHours()
//var day =now.getDay()

const auth=(req,res,next)=>{
    if(heure<17 && heure>=09  ){
        console.log("auth")
        next()
    } else{
        res.send("you can't access to this website now , please try between 09 and 17 ")
    }  
}
//const auth=(req,res,next)=>{
//    if (day<Friday && day>Monday ){
//        console.log("auth")
//        next()
//    } else{
//        res.send("you can't access to this website now , please try between Monday and Friday ")
//    }
//}
module.exports=auth
