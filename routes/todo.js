const express = require("express");
const {handelRenderHomePage,handelAddTodo,handelDeleteTodo} = require("../controlers/todo")

const router = express.Router();

router.get("/",handelRenderHomePage)

module.exports = router;