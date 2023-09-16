import React from 'react';
import { TodoInput, TodoList } from './components'

function App() {

  let [todos, setTodos] = React.useState([])

  return(
    <div className="container">
      <TodoInput setTodos={setTodos}/>
      <TodoList todos={todos} />
    </div>
  );
}



export default App;
