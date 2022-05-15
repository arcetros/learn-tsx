interface ITodoItem {
  text: string;
  onDelete: (text: string) => void;
}

const TodoItem = ({ text, onDelete }: ITodoItem) => {
  return (
    <li>
      <span style={{ paddingRight: "1rem" }}>{text}</span>
      <span onClick={() => onDelete(text)}>Delete this</span>
    </li>
  );
};

export default TodoItem;
