import React from "react"
import MainContent from "./components/MainContent.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"


function App() {
  // const firstName = "Rob"
  // const lastName = "Schwartz"
  //
  // const date = new Date(2019, 6 , 31, 22)
  // const hours = date.getHours()
  // let timeOfDay
  //
  // const styles = {
  //   // color: "#FF8C00",
  //   // backgroundColor: "#FF2D00",
  //   fontSize: "30px"
  // }
  //
  // if (hours < 12) {
  //   timeOfDay = "morning"
  //   styles.color = "#04756F"
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon"
  //   styles.color = "#8914A3"
  // } else {
  //   timeOfDay = "night"
  //   styles.color = "#D90000"
  // }

  return (
    <div>
      <MainContent />
      {/* <Header />
      <Footer /> */}
      {/* <h1 style={styles}>Good {timeOfDay} {firstName}!</h1>
      <h2>It is currently about {hours % 12} o'clock!</h2> */}
    </div>
  )
}

export default App


// Left off at styling react with css classes
