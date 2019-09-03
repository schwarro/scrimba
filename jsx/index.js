// import React from "react"
// import ReactDOM from "react-dom"
//
// // JSX
// ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById("root"))
//
// var myNewP = document.createElement("p")
// myNewP.innerHTML = "This is a paragraph."

// import React from "react"
// import ReactDOM from "react-dom"
//
// function MyInfo() {
//   return (
//     <div>
//       <h1>Bob Ziroll</h1>
//       <p>This is a paragraph about me...</p>
//       <ul>
//         <li>Thailand</li>
//         <li>Japan</li>
//         <li>Nordic Countries</li>
//       </ul>
//     </div>
//   )
// }
//
// ReactDOM.render(<MyInfo />, document.getElementById("root"))

import React from "react"
import ReactDOM from "react-dom"

import MyInfo from "./components/MyInfo"

ReactDOM.render(<MyInfo />, document.getElementById("root"))
