import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

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
  return (
    <>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </>
  );
};
