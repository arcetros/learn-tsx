import { useState } from "react";
import { todoItem } from "./constants/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<todoItem[]>([]);

  const handleTodo = (text: string) => {
    console.log(todos);
    setTodos((prevValue) => [...prevValue, { name: text }]);
  };

  const handleDelete = (text: string) => {
    setTodos((prevValue) => prevValue.filter((todo) => todo.name !== text));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={handleTodo} />
      <Todos items={todos} onDeleteTodo={handleDelete} />
    </div>
  );
}
