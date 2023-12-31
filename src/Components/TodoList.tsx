import { Todo } from "../modal";
import SingleTodo from "./SingleTodo";
import "./styles.css";
interface probs {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: probs) => {
  return <div className="todos">
   {todos.map((todo)=>(
<SingleTodo todo={todo} key={todo.id}
todos={todos}
setTodos={setTodos}
/>
   ))

   }
   
   </div>;
};

export default TodoList;
