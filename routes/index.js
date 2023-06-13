const express = require("express")
const router = express.Router();
const Todos = require('../model/Todo')

router.get('/', async (req,res) => {
    try {
        const todos = await Todos.find()
        res.status(200).json(todos)
    } catch(err) {
        res.status(404).json({message: err.message})
    }
})


router.post('/', async (req,res) => {
    const {
        title,
        description,
        priority,
        color,
        completed,
    } = req.body
    const todo = new Todos({
        title,
        description,
        priority,
        color,
        completed,
    })
    try{
        const latestTodo = await todo.save()
        res.status(201).json(latestTodo)
    }catch(err) {
        res.status(400).json({message:err.message})
    }
})

router.get('/:id', async (req,res) => {
    try {
        const todo = await Todos.findById(req.params.id)
        res.status(200).json(todo)
    } catch(err) {
        res.status(404).json({message: err.message})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const deleteTodo = await Todos.deleteOne({_id: req.params.id})
        res.status(202).json(deleteTodo)
    } catch(err) {
        res.status(404).json({message: err.message})
    }
})
 
router.put('/:id', async (req,res) => {
    try {
        const {id} = req.params
        const updatedObject = req.body
        const updateTodo = await Todos.findByIdAndUpdate(id,updatedObject,{new:true})
        return res.status(202).json(updateTodo)
    } catch(err) {
        res.status(404).json({message: err.message})
    }
})

module.exports = router