import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
      this.setState((prevState) => {
        return {
          count: prevState.count += 1
        }
      })
    }

    decrease() {
      this.setState((prevState) => {
        return {
          count: prevState.count -= 1
        }
      })
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>Increase!</button>
                <button onClick={this.decrease}>Decrease!</button>
            </div>
        )
    }
}

export default App
