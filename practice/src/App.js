import React, {Component} from "react"
import Conditional from "./Conditional"
import Header from "./Header"
import Footer from "./Footer"

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
                <Header />
                <Conditional isLoading={this.state.isLoading}/>
                <Footer />
            </div>
        )
    }
}

export default App
