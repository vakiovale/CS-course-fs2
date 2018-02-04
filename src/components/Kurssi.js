import React from 'react'
import Yhteensa from './Yhteensa'
import Osa from './Osa'

const Kurssi = ({ kurssi }) => {

  return (
    <div>
      <h1>{kurssi.nimi}</h1>
      {kurssi.osat.map(osa => <Osa osa={osa} />)}
      <Yhteensa kurssi={kurssi} />
    </div>
  )
}

export default Kurssi