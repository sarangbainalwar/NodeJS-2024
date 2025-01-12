const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname,'files')
console.warn(dirpath)

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+`/apple${i}.txt`,'apple')
// }

fs.readdir(dirpath,(err,files)=>{
    if(err){
        console.log(err)
    }else{
        files.forEach((item)=>{
            console.log(item)
        })
    }
})