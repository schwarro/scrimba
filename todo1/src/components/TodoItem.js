import React from 'react';

function TodoItem(props) {

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onClick={() => console.log("Clicked")}
      />
      <h3>Todo: {props.item.text}</h3>
      <hr/>
    </div>
  )
}

export default TodoItem
