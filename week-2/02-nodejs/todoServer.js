
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.json());

let todos = [];

function findIndex(arr, id) {
  for(let i = 0; i < arr.length; i++){
    if (arr[i].id === id){
      return i;
    } 
  }
  return -1
}

function removeIndex(arr, index) {
  let newTodos = [];
  for( let  i = 0; i < arr.length; i++){
    if (i !== index) {
      newTodos.push(arr[i])
    }
  }
  return newTodos;
}

app.get('/todos', (req, res) => {
  res.json(todos)
});

app.get('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id))
  if (todoIndex === -1){
    res.status(404).send();
  } else {
    res.json(todos[todoIndex]);
  }
})

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10000) + 1,
    title: req.body.title,
    completed: req.body.completed,
    description: req.body.description
  }
  todos.push(newTodo);
  res.status(201).json(todos);
})

app.put('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if ( todoIndex === -1) {
    res.status(404).send()
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].completed = req.body.completed;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex])
  }
})

app.delete('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos = removeIndex(todos, todoIndex);
    res.status(200).send()
  }
})

app.listen(port, () => {
  console.log(`listening at ${port}`);
})

module.exports = app;