import React, {Component} from "react"
import Conditional from "./component/Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                {/* <Conditional isLoading={this.state.isLoading}/> */}
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default App
