import React from "react"

function TodoItem(props) {

    const style = {
      textDecoration: "line-through",
      color: "grey",
      fontStyle: "italic"
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? style : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
