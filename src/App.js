import './App.css';
import React from "react";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const [complete, setComplete] = useState([]);
  const [text, setText] = useState("");
  const [button, setButton] = useState("Add");
  const InputHandler = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };
  const add = (event) => {
    setButton("Add");
    var obj = {
      data: text,
      id: Math.random(),
    };
    console.log(obj);
    console.log("Add button clicked");
    if (obj.data === "") {
      alert("Please Write Something");
    } else {
      setTodo([...todo,obj]);
      setText("");
    }
  };
  
  const CheckboxHandlerTodo = (val) => {
    for (let i = 0; i < todo.length; i++) {
      if (val === todo[i].id) {
        console.log("button");
        var obj = {
          data: todo[i].data,
          id: todo[i].id,
        };
        setComplete([...complete, obj]);
        todo.splice(i, 1);
      }
    }
  };
  const EditTodoHandler = (val) => {
    setButton("Update");
    console.log("Edit todo");
    for (let i = 0; i < todo.length; i++) {
      if (val === todo[i].id) {
        setText([todo[i].data]);
        console.log(setText);
        todo.splice(i, 1);
      }
    }
    var DisableEditTodo=document.getElementsByClassName("EditTodo");
    for(var i=0;i<DisableEditTodo.length;i++){
        DisableEditTodo[i].disabled=true;
    }
  };

  const EditCompleteHandler = (val) => {
    setButton("Update");
    console.log(val);
    for (let i = 0; i < complete.length; i++) {
      if (val === complete[i].id) {
        console.log(complete);
        setText([complete[i].data]);
        complete.splice(i, 1);
      }
    }
  var DisableEditComp=document.getElementsByClassName("EditComp");
   for(var i=0;i<DisableEditComp.length;i++){
        DisableEditComp[i].disabled=true;
   }
  };
  const DeleteTodoHandler = (val) => {
    console.log("Delete button is clicked");
    for (let i = 0; i < todo.length; i++) {
      if (val === todo[i].id) {
        console.log("Delete should be done");
        todo.splice(i, 1);
      }
    }
    setTodo([...todo]);
  };
  const CheckboxHandlerComplete = (val) => {
    for (let i = 0; i < complete.length; i++) {
      var obj = {
        data: complete[i].data,
        id: Math.random(),
      };
      if (val === complete[i].id) {
        // add();
        setTodo([...todo, obj]);
        complete.splice(i, 1);
      }
    }
  };
  const DeleteCompleteHnadler = (val) => {
    for (let i = 0; i < complete.length; i++) {
      if (val === complete[i].id) {
        complete.splice(i, 1);
      }
    }
    setComplete([...complete]);
  };

  return (
    <div className="App">
      <title>TODO List</title>
      <div className="container">
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>
        <p>
          <input
            id="new-task"
            type="text"
            onChange={InputHandler}
            name="text"
            value={text}
          />
          <button id="Add" value={button} onClick={add}>
            {button}
          </button>
        </p>
        <h3>Todo</h3>
        <p id="p1"></p>
        <p>
          <ul>
            {todo.map((element) => (
              <li>
                <input
                  type="checkbox"
                  checked={false}
                  id="i1"
                  value="checkbox"
                  onClick={() => CheckboxHandlerTodo(element.id)}
                />
                <label>{element.data}</label>
                <input
                  type="button"
                  value="Edit"
                  className='EditTodo'
                  onClick={() => EditTodoHandler(element.id)}
                />
                <input
                  type="button"
                  id="h"
                  value="Delete"
                  onClick={() => DeleteTodoHandler(element.id)}
                />
              </li>
            ))}
          </ul>
        </p>
        <h3>Completed</h3>
        <p id="p2"></p>
        <p>
          <ul>
            {complete.map((element) => (
              <li>
                <input
                  type="checkbox"
                  checked={true}
                  onClick={() => CheckboxHandlerComplete(element.id)}
                />
                <label>{element.data}</label>
                <input
                  type="button"
                  value="Edit"
                  className='EditComp'
                  onClick={() => EditCompleteHandler(element.id)}
                />
                <input
                  type="button"
                  value="Delete"
                  onClick={() => DeleteCompleteHnadler(element.id)}
                />
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default App;
