import React from 'react'
import Puhelinluettelo from './Puhelinluettelo'
import Ilmoitus from './Ilmoitus'
import personService from '../services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newPhone: '',
      filter: '',
      message: null 
    }
  }

  refresh() {
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  componentWillMount() {
    console.log('will mount')
    this.refresh()
  }

  addNotification(notification) {
    this.setState({
      message: notification
    })
    setTimeout(() => {
      this.setState({ message: null })
    }, 5000)
  }

  addContact = (event) => {
    event.preventDefault()
    const name = this.state.newName
    const phone = this.state.newPhone

    const newPerson = { name: name, number: phone }
    const persons = this.state.persons

    if(!persons.some(person => person.name === name)) {
      console.log('Adding new contact')
      personService
        .create(newPerson)  
        .then(response => {
          console.log(response)
          this.addNotification('Uusi yhteystieto lisätty!')
          this.refresh()
        })
      this.setState({ persons: persons })
    } else {
      console.log('Update phone number')
      const person = persons.find(person => person.name === name)
      personService
        .update(person.id, newPerson)
        .then(response => {
          console.log(response)
          this.addNotification('Puhelinnumero päivitetty!')
          this.refresh()
        })
    }
  }

  deleteHandler = (id) => {
    return () => {
      personService
        .remove(id)
        .then(response => {
          console.log(response)
          this.addNotification('Puhelinnumero poistettu!')
          this.refresh()
        })
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
        <Ilmoitus viesti={this.state.message} />
        <Puhelinluettelo persons={this.state.persons}
         filter={this.state.filter} handleFilterChange={this.handleFilterChange} 
         addContact={this.addContact} newName={this.state.newName} 
         handleNameChange={this.handleNameChange} newPhone={this.state.newPhone} 
         handlePhoneChange={this.handlePhoneChange} deleteHandler={this.deleteHandler} />
      </div>
    )
  }
}

export default App