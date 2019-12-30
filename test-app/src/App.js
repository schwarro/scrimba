import React from "react"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Title from "./components/Title.js"
import MainContent from "./components/MainContent.js"

function App() {

  return (
    <div>
      <Header />
      <div className="mainSection">
        <Title />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
