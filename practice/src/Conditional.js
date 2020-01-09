import React from "react"

function Conditional(props) {
  console.log(props.isLoading)

  // let x
  //
  // if(props.isLoading) {
  //   x = "isLoading is true"
  // } else {
  //   x = "isLoading is false"
  // }
  //
  // return (
  //   <h1>{x}</h1>
  // )

  // if(props.isLoading === true) {
  //   return (
  //       <h1>Loading...</h1>
  //   )
  // }
  // return (
  //     <h1>Some cool stuff about conditional rendering</h1>
  // )

  return (
    <div>

        {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}

    </div>
  )
}

export default Conditional
