const express = require("express");
const {handelAddTodo,handelDeleteTodo} = require("../controlers/cured")

const router = express.Router();

router.post("/add-todo",handelAddTodo).delete("/delete-todo/:id",handelDeleteTodo)

module.exports = router;