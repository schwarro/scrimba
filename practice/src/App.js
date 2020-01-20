import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render(){
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
    let wordText = this.state.isLoggedIn ? "Logged In" : "Logged Out"


    // if(this.state.isLoggedIn){
    //   buttonText = "Log Out"
    //   wordText = "Logged In"
    // } else {
    //   buttonText = "Log In"
    //   wordText = "Logged Out"
    // }
    return (
      <div>
        <h1>You are currently {wordText}</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}

export default App
