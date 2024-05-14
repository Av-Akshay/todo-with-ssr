const express = require("express");
const {connect} = require("./connection/connect")
const todoRouter = require("./routes/todo")
const curedRouter = require("./routes/cured")
const path = require('path') 
const bodyParser = require('body-parser');

const app = express();

const PORT = 8000;

//connection 
connect("mongodb://127.0.0.1:27017/todo-list")

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use("/",todoRouter);
app.use("/todo",curedRouter);
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
})