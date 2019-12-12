import React from "react"
// import MainContent from "./components/MainContent.js"
// import Header from "./components/Header.js"
// import Footer from "./components/Footer.js"
// import ContactCard from "./components/ContactCard.js"
import Joke from "./components/Joke.js"


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
      <Joke
        joke={{
          setUp: "What's the best thing about Switzerland?",
          punchline: "I don't know, but the flag is a big plus"
        }}
      />
        <Joke
          joke={{
            setUp: "I invented a new word!",
            punchline: "Plagiarism!"
          }}
        />
        <Joke
          joke={{
            setUp: "Did you hear about the mathematician who's afraid of numbers?",
            punchline: "He'll stop at anything to avoid them"
          }}
        />
        <Joke
          joke={{
            setUp: "Why do we tell actors to break a leg?",
            punchline: "Because every play has a cast"
          }}
        />
        <Joke
          joke={{
            setUp: "Helvetica and Times New Roman walk into a bar",
            punchline: "The bartender says get out of here! We don't serve your type here"
          }}
        />
      </div>
  )
}

export default App
