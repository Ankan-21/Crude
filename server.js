const express =require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const flash = require("connect-flash");

const ejs = require("ejs");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(flash());

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view engine",'ejs');
app.set("views",[(path.join(__dirname,'./app/modules'))]);

const catagoryroutes = require("./app/routes/catagory.routes");
app.use(catagoryroutes); 
const subCatagoryroutes = require("./app/routes/sub_catagory.routes");
app.use(subCatagoryroutes);
const productroutes = require("./app/routes/product.routes");
app.use(productroutes);



const port = process.env.PORT;
const db_link = process.env.DB_LINK ;

mongoose.connect(db_link,{useNewUrlParser : true , useUnifiedTopology : true})
.then(result =>{
    app.listen(port,()=>{
        console.log("server connected.......");
        console.log(`http://localhost:${port}`);
    })
})
.catch(err =>{
    console.log("error ",err);
})
