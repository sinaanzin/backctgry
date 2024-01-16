const mongoose=require("mongoose")
var mongourl="mongodb+srv://sinaan:sinaan12345@cluster0.vykkqsw.mongodb.net/textile?retryWrites=true&w=majority"
mongoose.connect(mongourl)
.then(()=>{
    console.log("database connected")
})

.catch(err =>
    {
        console.log(err)

    })
    module.exports=mongoose