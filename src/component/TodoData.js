import React, {  useEffect, useState } from "react";
import Axios from "axios";


const ShowTodos = () => {
  //Begin Here
  const [todos, setTodos] = useState([]);
  
  useEffect( () => { 
      async function fetchData() {
          try {
<<<<<<< HEAD
              const res = await Axios.get('http://localhost:8080/items', { withCredentials: true });
=======
              const res = await Axios.get('http://localhost:8080/items'); 
>>>>>>> 050adecc9ac75894b51fdd035a8728add9bcdb74
              setTodos(JSON.stringify(res.data));
              console.log(JSON.stringify(res.data));
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  return <div>{todos}</div>
}
export default ShowTodos;
