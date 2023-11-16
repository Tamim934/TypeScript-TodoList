import { useState, useEffect } from "react";
import { Todo } from "../modal"
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

import './styles.css'

type probs={
 todo:Todo;
 todos:Todo[];
 setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}:probs) => {
  const [edit ,setEdit]=useState<Boolean>(false)
  const [editTodo ,setEditTodo]=useState<string>(todo.todo)

  useEffect(() => {
    setEditTodo(todo.todo);
  }, [todo.todo]);

  const handleDone=(id:number)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
  };

  const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const handleEdit = (id: number) => {
    setTodos(todos.map((item) => item.id === id ? { ...item, todo: editTodo } : item));
    setEdit(false); 
  }

  return (
    <div className="Todos-single">
      {
        edit ? (
          <input type="text" value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}} className="todos-Edit" />
        ) : (
          todo.isDone ? (
            <s className="todos-text">{todo.todo}</s>
          ) : (
            <span className="todos-text">{todo.todo}</span>
          )
        )
      }

      <div>
        <span className="icon" onClick={() => {
          if (edit) {
            handleEdit(todo.id);
          } else {
            setEdit(true);
          }
        }}>
          <CiEdit />
        </span>
        <span className="icon" onClick={()=>handleDelete(todo.id)}>
          <MdDeleteForever />
        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
          <IoMdDoneAll />
        </span>
      </div>
    </div>
  );
}

export default SingleTodo


