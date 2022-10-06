import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import Pagination from './Pagination'
import { Redirect } from "react-router-dom";
import IntroCard from './IntroCard';
import AddItems from './AddItems';

const Home = ({isLoggedIn}) => {
    const [cards, setCards] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [merchPerPage] = useState(4)

    useEffect(() => {
      fetch(`https://react-anime-merch-api.herokuapp.com/data`)
      .then((res) => res.json())
      .then((aniInfo) => {
        setCards(aniInfo);
      });
    }, [cards]);

    const indexOfLastCard = currentPage * merchPerPage;
    const indexOfFirstCard = indexOfLastCard - merchPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    
    if (!isLoggedIn) return <Redirect to="/login" />

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
    <IntroCard 
        src="https://i.pinimg.com/originals/33/02/ab/3302abb9dbcb083e8acb39a84b274022.png"
        alt="background-image"
        title="Welcome To Your One Stop Anime Store"
        paragraph1='Adipisicing reprehenderit labore proident aute nisi consectetur enim. Esse enim ipsum duis occaecat id. 
        Laborum aliquip duis tempor quis excepteur quis est irure consectetur voluptate enim occaecat magna mollit.
        Esse enim ipsum duis occaecat id. Laborum aliquip duis tempor quis excepteur quis est irure consectetur voluptate enim occaecat magna mollit.'
        paragraph2="In case you want to know more about this site I suggest visting the About us page. But if you are okay and are just
        eager to see the site functionality then by all means browse away and dont't forget to like and share"
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
    <AddItems
      cards={cards}
      setCards={setCards}
    />
    </div>
  )
}

export default Home