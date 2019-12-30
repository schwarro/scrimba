import React from "react"
import Button from "./Button.js"

function Card(props) {
  //creates an individual profile card using info from the profileData array
  //each card is it's own div (cards) with the image left alone as it's own element and then the text (cardText) is divided into text and button.
  //this was done for styling so that grid can be used to properly display the elements
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
