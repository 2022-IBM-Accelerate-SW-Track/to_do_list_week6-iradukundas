import React from "react";
import "../component/todos.css";
import {  Card, Grid, ListItem, ListItemText, Button, Checkbox } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id} container spacing={2}>
          <Card style={{marginTop:10}}>
            <ListItem Button component="a" href="#simple-list">
              <Checkbox style={{paddingLeft:0}} color="primary"/>
              <ListItemText primary={todo.content} secondary={todo.date}/>
            </ListItem>
          </Card>
          <Card style={{width:40, justifyContent:'center', marginTop:10, marginLeft:2}}>
            <Button style={{marginTop:20, paddingRight:30}} onClick={()=> deleteTodo(todo.id)}>
              <DeleteIcon/>
            </Button>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;