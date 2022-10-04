import React, { useState } from 'react'
import CardList from './CardList'
import Pagination from './Pagination'
import { Redirect } from "react-router-dom";
import IntroCard from './IntroCard';

const Home = ({isLoggedIn}) => {
    const [cards, setCards] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [merchPerPage] = useState(4)
    
    if (!isLoggedIn) return <Redirect to="/login" />
    
    const indexOfLastCard = currentPage * merchPerPage;
    const indexOfFirstCard = indexOfLastCard - merchPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div>
    <IntroCard 
        src="https://i.pinimg.com/originals/33/02/ab/3302abb9dbcb083e8acb39a84b274022.png"
        alt="background-image"
        title="Welcome To Your One Stop Anime Store"
        paragraph='Adipisicing reprehenderit labore proident aute nisi consectetur enim. Esse enim ipsum duis occaecat id. 
        Laborum aliquip duis tempor quis excepteur quis est irure consectetur voluptate enim occaecat magna mollit.
        Esse enim ipsum duis occaecat id. Laborum aliquip duis tempor quis excepteur quis est irure consectetur voluptate enim occaecat magna mollit.'
        small="Made By Yours Truly"
    />
    <h2 className='mb-3'>Anime Merchandise: The Hot Topic Anime Store</h2>
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