import React from 'react'

const Osa = ({ osa }) => {

  return (
    <div>
      <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>
    </div>
  )
}

export default Osa