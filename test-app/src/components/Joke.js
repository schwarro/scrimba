import React from "react"

function Joke(props) {

  return(
    <div>
      <p style={{color: "green", display: !props.question ? "block" : "none"}}>Set up: "{props.joke.setUp}"</p>
      <p style={{color: "red"}}>Punchline: "{props.joke.punchline}"</p>
      <hr />
    </div>
  )
}

export default Joke
