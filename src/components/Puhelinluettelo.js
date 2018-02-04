import React from 'react'
import NumeroLomake from './NumeroLomake'
import PuhelinluetteloLista from './PuhelinluetteloLista'

const Puhelinluettelo = ({ persons, filter, 
  handleFilterChange, addContact, newName,
  handleNameChange, newPhone, handlePhoneChange }) => {

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <div>
        rajaa: <input value={filter} onChange={handleFilterChange} />
      </div>
      <NumeroLomake addContact={addContact} newName={newName} 
       handleNameChange={handleNameChange} newPhone={newPhone}
       handlePhoneChange={handlePhoneChange} />
      <PuhelinluetteloLista persons={persons} filter={filter} />
    </div>
  )
}

export default Puhelinluettelo