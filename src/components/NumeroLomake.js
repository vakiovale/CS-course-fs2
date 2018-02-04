import React from 'react'

const NumeroLomake = ({ addContact, newName, newPhone, 
                        handleNameChange, handlePhoneChange }) => {

  return (
    <form onSubmit={addContact}>
      <div>
        <h3>Lisää uusi</h3>
      </div>
      <div>
        nimi: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        numero: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default NumeroLomake