import React from "react"

function Product(props) {

  return(
    <div>
      <h2ar>Name: {props.name}</h2>
      <h3>Price: ${props.price}</h3>
      <p>Description: {props.description}</p>
      <hr />
    </div>
  )
}

export default Product
