"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
});
router.post("/deleteTodo/:id", (req, res, next) => {
    const todelId = req.params.id;
    console.log(todelId);
    const todelObjectIndex = todos.findIndex(obj => obj.id === todelId);
    if (todelObjectIndex >= 0 && todelObjectIndex < todos.length) {
        todos.splice(todelObjectIndex, 1);
    }
    else {
        return res.status(404).json({ msg: "Entry Not Found" });
    }
    return res.status(200).json(todos);
});
router.post("/edit/:id", (req, res, next) => {
    const body = req.body;
    const Req = req.params;
    const toeditId = Req.id;
    const new_obj = body;
    const toeditObjectIndex = todos.findIndex(obj => obj.id === toeditId);
    if (toeditObjectIndex >= 0 && toeditObjectIndex < todos.length) {
        todos[toeditObjectIndex] = new_obj;
    }
    else {
        return res.status(404).json({ msg: "Entry Not Found" });
    }
    return res.status(201).json({ todos });
});
exports.default = router;
