import React from "react"
import Button from "./Button.js"

function Card(props) {
  return (
    <div className="cards">
      <img src={props.card.img} alt="Profile shot of individual"/>
      <div className="cardText">
        <div className="text">
          <h3>{props.card.name}</h3>
          <h5>{props.card.title}</h5>
          <hr />
          <p>{props.card.profile}</p>
        </div>
        <div className="button">
          <Button />
        </div>
      </div>
    </div>
  )
}


export default Card
