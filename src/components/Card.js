import React from "react";
import {useCart} from "react-use-cart"

const Card = ({ merch, setCards, cards }) => {
  const {addItem} = useCart();

  function handleDelete(){
    fetch(`https://react-anime-merch-api.herokuapp.com/data/${merch.id}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(()=>{
      const delCard = cards.filter((merchandise)=>(
        merchandise.id !== merch.id
      ));
      setCards(delCard)
    })
  }

  return (
    <>
    <div className="col">
    <div className="card h-100">
      <img src={merch.image} className="card-img-top" alt="..." height={330}/>
      <div className="card-body">
        <h4 className="card-title">{merch.name}</h4>
        <small className="text-muted">{merch.type}</small>
        <p className="card-text">{merch.description}</p>
        <p className="card-text text-success">=Ksh {merch.price}</p>
        <div className="card-button row d-flex justify-content-between">
        <button onClick={()=>addItem(merch)} className="btn btn-primary ms-2 mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width: "120px"}}>Add to Cart</button>
        <button onClick={handleDelete} className="btn btn-danger ms-2 mb-1" style={{width: "120px"}}>Delete</button>
      </div>
      </div>
      </div>
    </div>
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Item added
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">This item has been added to cart</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Card;
