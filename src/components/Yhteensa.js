import React from 'react'

const Yhteensa = ({ kurssi }) => {

  const reducer = (accumulator, osa) => accumulator + osa.tehtavia
  const yhteensa = kurssi.osat.reduce(reducer)

  return (
    <div>
      <p>yhteensä {kurssi.osat.reduce(reducer, 0)} tehtävää</p>
    </div>
  )
}

export default Yhteensa