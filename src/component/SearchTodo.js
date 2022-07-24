<<<<<<< HEAD
import React, { Component, Redirect } from "react";
=======
import React, { Component } from "react";
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
import { Button, TextField } from "@mui/material";
import Axios from "axios";

class SearchTodo extends Component {
  
  state = {
    tmpdata: [],
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
      date: Date().toLocaleString('en-US'),
    });
  };
  

  handleSubmit = (e) => {
<<<<<<< HEAD
=======
    //Begin Here
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
    e.preventDefault();  
    // HTTP Client to send a GET request
    Axios({
      method: "GET",
      url: "http://localhost:8080/items/search",
      headers: {
        "Content-Type": "application/json" 
      },
      params: {
        taskname: this.state.content
      }
    }).then(res => {
      this.setState({
        tmpdata: JSON.stringify(res.data),
      });
      // uncomment to see from the browser console log what is returned 
      //console.log(this.state.tmpdata);
    });
<<<<<<< HEAD

=======
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search-item-input"
            label="Search for ToDo Item"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.value}
          /> 
          <Button
            id="search-item-button"
            name='submit'
            style={{ marginLeft: "10px",marginTop:10 }}
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>
        <div>{this.state.tmpdata}</div>
      </div>
    );
  }
}

export default SearchTodo;
