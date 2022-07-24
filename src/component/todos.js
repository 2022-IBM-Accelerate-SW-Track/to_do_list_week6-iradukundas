import React from "react";
import "../component/todos.css";
<<<<<<< HEAD
import {  Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";


const Todos = ({ todos, deleteTodo }) => {
  console.log(todos);
  const todoList = todos.length ? (
    todos.map((todo) => {
      let color = '#fffffff'
      if (new Date() > new Date(todo.due)){
        color = '#d9b60bf7'
      }
      return (
        <Grid key={todo.id} container spacing={2}>
          <Card data-testid={todo.content} style={{marginTop:10, background: color}}>
          
            <ListItemButton component="a" href="#simple-list">
              <Checkbox style={{paddingLeft:0}} color="primary" onClick={() => deleteTodo(todo.id)}/>
              <ListItemText primary={todo.content} secondary={todo.due}/>
=======
import { Card, Grid, ListItemButton, ListItemText, Checkbox} from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      let color = "#ffffffff"
      if (new Date(todo.duedate) < new Date()){
        color = 'red'
      }
      console.log(color)
      return (
        <Grid key={todo.id}>
          <Card data-testid={todo.content} style={{marginTop:10, background: color}}>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} as well as its 
            current date/time {todo.date}. Also, the item's id is utilized in order to correctly delete an item from the Todo list*/}
            <ListItemButton component="a" href="#simple-list">
              <Checkbox style={{paddingLeft:0}} color="primary" onClick={() => deleteTodo(todo.id)}/>
              <ListItemText primary={todo.content} secondary={todo.duedate}/>
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
<<<<<<< HEAD

=======
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
<<<<<<< HEAD


=======
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
};

export default Todos;
