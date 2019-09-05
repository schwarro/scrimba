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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
  }



  render() {
    const todoItems = this.state.todos.map(item =>
      <TodoItem
        key = {item.id}
        item = {item}
        handleChange = {this.handleChange}
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
