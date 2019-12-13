import React from "react"

function TodoItem(props) {
  console.log(props);
  return (
    <div className="todoItem">
      <input type="checkbox" checked={props.completed}/>
      <p>Todo: {props.todo}</p>
    </div>
  )
}

export default TodoItem


// Left off at react props
