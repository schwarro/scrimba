import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          destination: "",
          isVegan: false,
          isKosher: false,
          isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                  <input
                    value={this.state.firsName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />

                  <br />

                  <input
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />

                  <br />

                  <input
                    value={this.state.age}
                    name="age"
                    placeholder="Age"
                    onChange={this.handleChange}
                  />

                  <br />

                    {/* Create radio buttons for gender here */}

                    <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          checkedVegan = {this.state.gender === "Male"}
                          onChange={this.handleChange}
                        /> Male
                    </label>

                    <br />

                    <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked = {this.state.gender === "Female"}
                          onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />

                    {/* Create select box for location here */}
                    <br />

                    <select
                      vaue={this.state.destination}
                      onChange={this.handleChange}
                      name="destination"
                    >
                      <option value="">--Please Choose Your Destination--</option>
                      <option value="Toronto">Toronto</option>
                      <option value="Montreal">Montreal</option>
                      <option value="Vancouver">Vancouver</option>
                      <option value="Ottawa">Ottawa</option>
                    </select>

                    {/* Create check boxes for dietary restrictions here */}
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>

                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose: {this.state.isLactoseFree ? "Yes" : "No"}</p>

            </main>
        )
    }
}

export default App
