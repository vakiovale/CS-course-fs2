import React from 'react'

const PuhelinluetteloLista = ({ persons, filter }) => {
  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {persons
          .filter(person => 
            person.name.match(new RegExp(filter, "i")) !== null)
          .map(person => 
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

export default PuhelinluetteloLista