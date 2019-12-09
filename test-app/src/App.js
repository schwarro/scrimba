import React from "react"
import MainContent from "./components/MainContent.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"


function App() {
  const firstName = "Rob"
  const lastName = "Schwartz"

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <div>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <h1>Good {timeOfDay} {firstName}!</h1>
      <h2>It is currently about {hours % 12} o'clock!</h2>
    </div>
  )
}

export default App


// Left off at styling react with css classes
