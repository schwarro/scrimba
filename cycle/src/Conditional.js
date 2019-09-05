import React from "react"

function Conditional(props) {
//     console.log(props.isLoading)
//     return (
//       <h1>Hello</h1>
//     )
// }


// if(props.isLoading === true) {
//     return (
//         <h1>Loading...</h1>
//     )
// } else {
//     return (
//         <h1>Some cool stuff about conditional rendering</h1>
//     )
// }
  return (
    <div>
      {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
    </div>

  )


}


export default Conditional
