import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete}) => {
  return (
    <Grid>
      {todos.map((todo, ind) => (
        <TodoListItem todo={todo} counter={ind + 1} key={todo.id} onDelete={onDelete} />
      ))}
    </Grid>
  );
};
