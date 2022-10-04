import React, { useState } from 'react'
import CardList from './CardList'
import Pagination from './Pagination'

const Home = () => {
    const [cards, setCards] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [merchPerPage] = useState(4)

    const indexOfLastCard = currentPage * merchPerPage;
    const indexOfFirstCard = indexOfLastCard - merchPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div>
    <CardList 
        cards={currentCards}
        setCards={setCards}
    />
    <Pagination 
        merchPerPage={merchPerPage}
        totalMerch={cards.length}
        paginate={paginate}
    />
    </div>
  )
}

export default Home