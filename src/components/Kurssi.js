import React from 'react'

const Kurssi = ({ kurssi }) => {

  return (
    <div>
      {kurssi.osat.map(osa => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>)}
    </div>
  )
}

export default Kurssi