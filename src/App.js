// import logo from './logo.svg';
import './App.css';
import Todos from "./mycomponant/Todos";

import React, { useEffect, useState } from 'react';
import Addtodo from "./mycomponant/Addtodo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  

  const addTodo = (firstname, lastname) => {
    console.log("i am adding to this", firstname, lastname);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodos = {
      sno: sno,
      firstname: firstname,
      lastname: lastname
    }
    setTodos([...todos, mytodos]);
    console.log(mytodos);
    // localStorage.setItem("todos", JSON.stringify(todos));


  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
  // 
  return (
    <>
    <Router>
      <Switch>
         <Route exact path="/" render={()=>{
           return(
             <>
             <Addtodo addTodo={addTodo} />
      <Todos todos={todos}  />
             </>
           )

          }} >
          
          </Route>
          
          
      </Switch>
      </Router>
    </>
  );
}

export default App;
