import React from 'react'
import Card from './Card'

const CardList = ({cards}) => {
    const displayCards = cards.map((merch)=>(
        <Card 
            key={merch.id}
            merch={merch}
            cards={cards}
        />
    ))
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
    {displayCards}
    </div>
  )
}

export default CardList