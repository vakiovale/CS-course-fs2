import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { 
          name: 'Arto Hellas',
          phone: '040999999'
        }
      ],
      newName: '',
      newPhone: ''
    }
  }

  addContact = (event) => {
    event.preventDefault()
    const name = this.state.newName
    const phone = this.state.newPhone

    const newPerson = { name: name, phone: phone }
    const persons = this.state.persons

    if(!persons.some(person => person.name === name)) {
      persons.push(newPerson)
      this.setState({ persons: persons })
    } else {
      console.log('Nimi on jo luettelossa!')
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handlePhoneChange = (event) => {
    console.log(event.target.value)
    this.setState({ newPhone: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addContact}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            numero: <input value={this.state.newPhone} onChange={this.handlePhoneChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {this.state.persons.map(person => 
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App