const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
const route = require("./routes/route");

app.use("/", route);


app.listen(process.env.PORT || 3000, function(){
    console.log('express is running on'+(process.env.PORT || 3000));
})