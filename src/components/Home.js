import React, { useState, useEffect } from 'react'
import CardList from './CardList'

const Home = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8001/data`)
        .then(res=>res.json())
        .then((aniInfo)=>{
          setCards(aniInfo)
        })
      }, [])


  return (
    <CardList 
        cards={cards}
    />
  )
}

export default Home