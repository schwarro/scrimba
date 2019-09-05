import React from "react"

function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("You hovered over me")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={() => console.log("I was clicked")}>Click me</button>
        </div>
    )
}

export default App
