import "./styles.css";
import { useRef } from "react";
interface Probs {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfeild = ({ todo, setTodo, handleAdd }: Probs) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a task"
        className="input-Box"
      />
      <button className="Input-sumbit" type="submit">
        Add
      </button>
    </form>
  );
};

export default Inputfeild;
