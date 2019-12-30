import React from "react"
import profileData from "../profileData"
import Card from "./Card.js"

function MainContent() {
  const profileCards = profileData.map(card => <Card key={card.id} card={card}/>)
  return (
    <div className="cardContainer">
      {profileCards}
    </div>
  )
}

export default MainContent
