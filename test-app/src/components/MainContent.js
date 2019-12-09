import React from "react"
import TodoItem from "./TodoItem.js"

function MainContent() {
  return (
    <div className="todoList">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default MainContent
