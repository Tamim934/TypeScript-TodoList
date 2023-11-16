import { useState } from "react";

import "./App.css";
import Inputfeild from "./Components/Inputfeild";
import { Todo } from "./modal";
import TodoList from "./Components/TodoList";

// let name:any;
// let age:number | string;
// let isStudent:boolean;
// let hobbies:string[];
// let role:[number,string]

//difine  afuction
// never retrun nothing
// let printName:(name:string)=>void

// function printName(name:string){
// console.log(name)
// }
// printName("tamim")

// interface Person{
//   name:string,
//   age?:number,
// }
// let person:Person={
//   name:'tamim',
// }

// let lostofpeople: Person[]

//recomended before any
// let personName:unknown

// type X={
//   a:string;
//   b:number;
// }

// type Y=X&{
// c:"tamim",
// d:43,
// a:"21",
// b:2
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todos) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("")
    }
  };

  return (
    <div className="App">
      <span className="heading">Todo List TypeScript</span>
      <Inputfeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
   
    </div>
  );
};

export default App;
