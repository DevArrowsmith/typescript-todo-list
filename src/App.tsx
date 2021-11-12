import React from 'react';
import ToDoListItem from './ToDoListItem';

const todos: ToDo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  return (
    <ul>
      <ToDoListItem todo={todos[0]} />
      <ToDoListItem todo={todos[1]} />
    </ul>
  );
}

export default App;
