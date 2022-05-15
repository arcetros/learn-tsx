import { todoItem } from "../constants/todo";
import Item from "./TodoItem";

interface TodoItem {
  items: todoItem[];
  onDeleteTodo: (name: string) => void;
}

const Todos = ({ items, onDeleteTodo }: TodoItem) => {
  return (
    <ul>
      {items &&
        items.map(({ name }, index: number) => (
          <Item key={index} text={name} onDelete={onDeleteTodo} />
        ))}
    </ul>
  );
};

export default Todos;
