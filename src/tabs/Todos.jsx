import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect} from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(()=>(JSON.parse(localStorage.getItem("todosList")) ?? []));

  console.log(todos);

  const onSubmit = text => {
    setTodos(prev => {
      return [
        ...prev,
        {
          id: nanoid(),
          text,
        },
      ];
    });
  };
  const onDelete = (id) => {
    setTodos((prev) => prev.filter(item => item.id !== id));
  }
  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </>
  );
};
