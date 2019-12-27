import React from "react"

function Card(props) {
  return (
    <div>
      <img src={props.card.img} alt="Profile Image"/>
      <h1>{props.card.name}</h1>
      <h3>{props.card.title}</h3>
      <hr />
      <p>{props.card.profile}</p>
    </div>
  )
}


export default Card
