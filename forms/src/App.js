import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          isFriendly: true,
          gender: "",
          favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      const {name, value, type, checked} = e.target
      type === "checkbox" ?
      this.setState({ [name] : checked }) :
      this.setState({ [name]: value })
    }

    render() {
        return (
            <form>
              <input
                type="text"
                value={this.state.firsName}
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />

              <br />

              <input
                type="text"
                value={this.state.lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
              />

              <br />

              <textarea
                value={"Hello"}
                onChange={this.handleChange}
              />

              <br />

              <label>
                  <input
                    type="checkbox"
                    name="isFriendly"
                    checked = {this.state.isFriendly}
                    onChange={this.handleChange}
                  /> Is Friendly
              </label>

              <br />

              <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked = {this.state.gender === "male"}
                    onChange={this.handleChange}
                  /> Male
              </label>

              <br />

              <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked = {this.state.gender === "female"}
                    onChange={this.handleChange}
                  /> Female
              </label>

              <br />

              <select
                vaue={this.state.favColor}
                onChange={this.handleChange}
                name="favColor"
              >
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="red">red</option>
              </select>



              <h1>{this.state.firstName} {this.state.lastName}</h1>
              <h2>You are a {this.state.gender}</h2>
              <h2>Your favourite color is {this.state.favColor}</h2>

              <button>Submit</button>

            </form>
        )
    }
}

export default App
