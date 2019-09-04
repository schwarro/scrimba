import React, { Component } from "react"
import ReactDOM from "react-dom"

// #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }

class App extends React.Component {
  render() {
    return (
        <div>
            <Header
              username = "Rob"
            />
            <Greeting />
        </div>
    )
  }
}

// class App extends React.Component {
//   render() {
//     return (
//         <div>
//             <Header
//               username = "Rob"
//             />
//             <Greeting />
//         </div>
//     )
//   }
// }

// #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

class Header extends React.Component {
  render() {
    return (
        <header>
            <p>Welcome, {this.props.username}!</p>
        </header>
    )
  }
}

// class Header extends React.Component {
//   render() {
//     return (
//         <div>
//           <header>
//               <p>Welcome, {this.props.username}!</p>
//           </header>
//         </div>
//     )
//   }
// }

// #3
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }

class Greeting extends Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}

// class Greeting extends Component {
//
//   render() {
//
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//
//     return (
//         <div>
//           <h1>Good {timeOfDay} to you, sir or madam!</h1>
//         </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"))
