import React from "react"

function Joke(props) {

  return(
    <div>
      <p style={{color: "green", display: props.question ? "block" : "none"}}>Set up: "{props.setUp}"</p>
      <p style={{color: "red"}}>Punchline: "{props.punchLine}"</p>
      <hr />
    </div>
  )
}

export default Joke
