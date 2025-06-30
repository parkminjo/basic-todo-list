interface Props {
  newTodo: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({ newTodo, onChange, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={newTodo} onChange={onChange} />
    </form>
  );
};

export default TodoForm;
