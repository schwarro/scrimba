import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem.js';
import todosData from './todosData.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }



  render() {
    const todoItems = this.state.todos.map(item =>
      <TodoItem
        key = {item.id}
        item = {item}
      />
    )
    
    return (
      <div>
        {todoItems}
      </div>
    );
  }
}



// function App() {
//   const todoItems = todosData.map(item =>
//     <TodoItem
//       key = {item.id}
//       item = {item}
//     />
//   )
//
//   return (
//     <div>
//       {todoItems}
//     </div>
//   );
// }

export default App;
