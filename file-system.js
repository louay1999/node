const { error } = require("console")
const fs = require ("fs")

fs.writeFileSync("welcome.txt","Hello Node",(err,data)=>{
    if(err){
        return console.log(err)
    }
    }
)
fs.readFile("welcome.txt",(err,data)=>{
    if(err){
        return console.log(err)
    }else {return console.log(data.toString())}
    }
)