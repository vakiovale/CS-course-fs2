import React from 'react'

const PuhelinluetteloLista = ({ persons, filter, deleteHandler }) => {
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
              <td>{person.number}</td>
              <td>
                <button onClick={deleteHandler(person.id)}>Poista</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PuhelinluetteloLista