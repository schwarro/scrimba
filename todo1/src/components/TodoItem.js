import React from 'react';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onClick={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>Todo: {props.item.text}</p>
      <hr/>
    </div>
  )
}

export default TodoItem
