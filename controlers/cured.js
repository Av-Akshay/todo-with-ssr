const Todo = require("../model/todo");


const handelAddTodo = async (req,res)=>{
    const {body} = req;
  await Todo.create({
    todo:body.todo
   })
   res.redirect("/")
}
const handelDeleteTodo = async (req,res)=>{
    const id = req.params.id
    console.log(id);
    await Todo.findByIdAndDelete(id);
    res.redirect("/")
}

module.exports = {handelAddTodo,handelDeleteTodo}