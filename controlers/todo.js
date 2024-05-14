const Todo = require("../model/todo");

const handelRenderHomePage = async (req,res)=>{
    const allToDo = await Todo.find({});
    res.render("home",{
        allToDo
    });
}


module.exports = {handelRenderHomePage}