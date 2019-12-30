import React from "react"
import profileData from "../profileData"
import Card from "./Card.js"

function MainContent() {
  // creates new array of each card from the profile data array and then displays each one as a profile card
  const profileCards = profileData.map(card => <Card key={card.id} card={card}/>)
  return (
    <div className="cardContainer">
      {profileCards}
    </div>
  )
}

export default MainContent
