import { useRef } from "react";

interface IText {
  onAddTodo: (text: string) => void;
}

const NewTodo = ({ onAddTodo }: IText) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputRef = ref.current!.value;

    if (inputRef.trim().length === 0) {
      return;
    }
    onAddTodo(inputRef);
  };

  return (
    <form onSubmit={handleSubmitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={ref} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
