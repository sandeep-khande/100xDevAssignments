const express = require('express');
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json())
app.use(express.json())

function findIndex (arr, id){
    for(i = 0; i<arr.length; i++){
        if (id === arr[i].id){
            return i
        }
    }
    return -1
}

function removeIndex(arr, index){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if (i !== index) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

app.get('/todos', (req, res) => {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send("Internal Server Error")
        }
        res.json(JSON.parse(data))
    })
})

app.get('/todos/:id', (req, res) => {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id))
        if(todoIndex === -1){
            res.status(404).send()
        } else {
            res.json(todos[todoIndex]);
        }
    })
})

app.post('/todos', (req, res) => {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
        const newTodo = {
            id: Math.floor(Math.random() * 10000) + 1,
            title: req.body.title,
            completed: req.body.completed,
            description: req.body.description
        }
        const todos = JSON.parse(data)

        todos.push(newTodo)

        fs.writeFile('todos.json', JSON.stringify(todos), 'utf-8', (err) => {
            if (err) {
                res.status(201).send()
            } else {
                res.json(newTodo);
            }
        })
    })
})

app.put('/todos/:id', (req, res) => {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id))
        if(todoIndex === -1){
            res.status(404).send()
        } else {
            const newTodo = {
                id: todos[todoIndex].id,
                title: req.body.title,
                completed: req.body.completed,
                description: req.body.description
            }
            todos[todoIndex] = newTodo;
    
            fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
                if (err) {
                    res.status(500).send("Internal Server Error")
                }
                res.status(200).json(newTodo)
            })
        }
    })
})

app.delete('/todos/:id', (req, res) => {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
        const todos = JSON.parse(data)
        const todoIndex = findIndex(todos, parseInt(req.params.id))
        if(todoIndex === -1) {
            res.status(404).send()
        } else{
            let updatedTodos = removeIndex(todos, todoIndex)
            fs.writeFile('todos.json', JSON.stringify(updatedTodos), (err) => {
                if (err) {
                    res.status(500).send("Internal Server Error")
                }
                res.json(updatedTodos)
            })
        }
    })
})

app.listen(port, () => {
    console.log(`listening at ${port}`);
})

module.exports = app;