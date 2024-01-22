import React from 'react'
import GridContainer from '../grid/GridContainer'

function Card() {
  return (
    <div>
        <GridContainer className="bg-secondary flex flex-col gap-7 justify-center items-center h-40 md:flex-row">
        <p>texto texto mutcho texto</p>
        </GridContainer>
    </div>
  )
}

export default Card