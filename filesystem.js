const { log } = require("node:console");
const { writeFile } = require("node:fs");
const { readFile } = require("node:fs");
const fs = require('fs');
function callback(err){

if(err){

    console.log(err);
} 
    else{

        console.log("file created successfully");
    
}
}


function readfile(){

readFile(`files/${filename} ${timestamp}.txt`  , (err, data)=>{


    if(err){

        console.log(err)
    }
    else{

        console.log(data.toString());
    }
})


}
const filecontent = new Date().toLocaleString();
const date = new Date().getDate();
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const hours = new Date().getHours();
const mins = new Date().getMinutes();
const secons = new Date().getSeconds();
const filename = `${date}-${month}-${year}`
const timestamp = (`${hours}-${mins}-${secons}`);
console.log(timestamp);



function CreateandWritefile(){



writeFile(`files/${filename} ${timestamp}.txt` , `${filecontent}` , "utf-8" , callback)


}

module.exports ={


    CreateandWritefile,
    readfile
}