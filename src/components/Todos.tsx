import { todoItem } from "../constants/todo";
import Item from "./TodoItem";

interface TodoItem {
  items: todoItem[];
}

const Todos = ({ items }: TodoItem) => {
  return <ul>{items && items.map((item) => <Item text={item.name} />)}</ul>;
};

export default Todos;
