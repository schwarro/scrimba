import React from "react"
import Logo from "../imgs/Logo.png"

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="navbar">
          <img className="logo" src={Logo} alt="The Acuity Ads logo"/>
        </header>
      </div>
    )
  }
}

export default Header
