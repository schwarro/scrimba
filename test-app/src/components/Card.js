import React from "react"
import Button from "./Button.js"

function Card(props) {
  return (
    <div>
      <img src={props.card.img} alt="Profile Image"/>
      <h1>{props.card.name}</h1>
      <h3>{props.card.title}</h3>
      <hr />
      <p>{props.card.profile}</p>
      <Button />
    </div>
  )
}


export default Card
