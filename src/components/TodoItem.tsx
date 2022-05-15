interface ITodoItem {
  text: string;
}

const TodoItem = ({ text }: ITodoItem) => {
  return <li>{text}</li>;
};

export default TodoItem;
