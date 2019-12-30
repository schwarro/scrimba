import React from "react"
import Logo from "../imgs/Logo.png"

class Header extends React.Component {
  //contains the logo at the top of the page
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
