import React from "react"

function Jokes(props) {
  return (
    <div className="jokes">
      <h3>{props.joke.question}</h3>
      <p>{props.joke.punchLine}</p>
    </div>
  )
}
export default Jokes
