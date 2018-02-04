import React from 'react'
import axios from 'axios'
import Puhelinluettelo from './Puhelinluettelo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newPhone: '',
      filter: '' 
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  addContact = (event) => {
    event.preventDefault()
    const name = this.state.newName
    const phone = this.state.newPhone

    const newPerson = { name: name, number: phone }
    const persons = this.state.persons

    if(!persons.some(person => person.name === name)) {
      persons.push(newPerson)
      this.setState({ persons: persons })
    } else {
      console.log('Nimi on jo luettelossa!')
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handlePhoneChange = (event) => {
    this.setState({ newPhone: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    return (
      <div>
        <Puhelinluettelo persons={this.state.persons}
         filter={this.state.filter} handleFilterChange={this.handleFilterChange} 
         addContact={this.addContact} newName={this.state.newName} 
         handleNameChange={this.handleNameChange} newPhone={this.state.newPhone} 
         handlePhoneChange={this.handlePhoneChange} />
      </div>
    )
  }
}

export default App