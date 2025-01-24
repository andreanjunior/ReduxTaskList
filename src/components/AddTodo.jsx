import { useDispatch } from 'react-redux'; // Corrigido de 'react' para 'react-redux'
import { addTodo } from '../slices/todoSlice';
import { useState } from 'react';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Impede o envio de uma tarefa vazia
    dispatch(addTodo(input));
    setInput(''); // Limpa o campo de entrada
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione uma tarefa..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AddTodo;
