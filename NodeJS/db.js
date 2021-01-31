const mongoose = require("mongoose");

// mongoose.connect('url',(err) => {})
mongoose.connect('mongodb://localhost:27017/MEANCRUDDemo', {useUnifiedTopology: true, useNewUrlParser: true},(err)=>{
    if(!err){
        console.log("MongoDB Connection Sucsess...");
    }
    else{
        console.log("Eroor in DB : " + JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;