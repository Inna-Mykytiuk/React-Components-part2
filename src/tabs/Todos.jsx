import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm } from 'components';
import { Todo } from 'components/Todo/Todo';
import { useLocalStorage } from 'react-use';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const onSubmitForm = text => {
    const todoObj = {
      id: nanoid(),
      text,
    };

    setTodos([...todos, todoObj]);
  };
  return (
    <>
      <SearchForm onSubmit={onSubmitForm} />
      <Grid>
        {todos.map((todo, idx) => {
          return (
            <GridItem key={todo.id}>
              <Todo
                text={todo.text}
                number={idx + 1}
                onDelete={deleteTodo}
                id={todo.id}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
