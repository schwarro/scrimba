import React from "react"

class App extends React.Component {
    // constructor() {
    //   super()
    //   this.state = {
    //     name: "Rob",
    //     age: 31
    //   }
    // }
    //
    // render() {
    //   return (
    //       <div>
    //           <h1>{this.state.name}</h1>
    //           <h3>{this.state.age} years old</h3>
    //       </div>
    //   )
    // }

    constructor() {
      super()
      this.state = {
        isLoggedIn: true
      }
    }

    render() {
      let x

      if(this.state.isLoggedIn === true) {
        x = "in"
      } else {
        x = "out"
      }
      return (
        <div>
          <h1>You are currently logged {x}</h1>
        </div>
      )
    }
}

export default App
