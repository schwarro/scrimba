import React from "react"
// import MainContent from "./components/MainContent.js"
// import Header from "./components/Header.js"
// import Footer from "./components/Footer.js"
// import ContactCard from "./components/ContactCard.js"
import Joke from "./components/Joke.js"
import jokesData from "./jokesData"


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

  const jokeComponents = jokesData.map((joke) => {
    return (
      <Joke
        question={joke.question}
        punchLine={joke.punchLine}
      />
    )
  })
  return (
    <div>
            {/* <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />

            <Joke
                question="Did you hear about the mathematician who's afraid of negative numbers?"
                punchLine="He'll stop at nothing to avoid them!"
            />

            <Joke
                question="Hear about the new restaurant called Karma?"
                punchLine="There’s no menu: You get what you deserve."
            />

            <Joke
                question="Did you hear about the actor who fell through the floorboards?"
                punchLine="He was just going through a stage."
            />

            <Joke
                question="Did you hear about the claustrophobic astronaut?"
                punchLine="He just needed a little space."
            /> */}
            {jokeComponents}
      </div>
  )
}

export default App
