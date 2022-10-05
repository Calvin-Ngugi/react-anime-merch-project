import React, { useEffect } from "react";
import Card from "./Card";

const CardList = ({ cards, setCards }) => {
  useEffect(() => {
    fetch(`http://localhost:8001/data`)
      .then((res) => res.json())
      .then((aniInfo) => {
        setCards(aniInfo);
      });
  }, []);
  

  const displayCards = cards.map((merch) => (
    <Card key={merch.id} merch={merch} cards={cards} setCards={setCards}/>
  ));

  return (
        <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
        {displayCards}
        </div>
      </div>
  );
};

export default CardList;
