import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {

    let wordDisplay
    let buttonDisplay

    this.state.isLoggedIn ? wordDisplay = "in" : wordDisplay = "out"

    this.state.isLoggedIn ? buttonDisplay = "Log Out" : buttonDisplay = "Log In"

    return (
        <div>
            <h1>You are currently logged {wordDisplay}</h1>
            <button onClick={this.handleClick}>
              {buttonDisplay}
            </button>
        </div>
    )
  }

}

export default App
