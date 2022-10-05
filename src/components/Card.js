import React from "react";
import {useCart} from "react-use-cart"

const Card = ({ merch }) => {
  const {addItem} = useCart();

  return (
    <div className="col">
    <div className="card h-100">
      <img src={merch.image} className="card-img-top" alt="..." height={330}/>
      <div className="card-body">
        <h4 className="card-title">{merch.name}</h4>
        <small className="text-muted">{merch.type}</small>
        <p className="card-text">{merch.description}</p>
        <p className="card-text text-success">=Ksh {merch.price}</p>
        <div className="card-button row d-flex justify-content-between">
        <button onClick={()=>addItem(merch)} className="btn btn-primary ms-2 mb-1" style={{width: "120px"}}>Add to Cart</button>
        <button onClick={()=>console.log("delete sth")} className="btn btn-danger ms-2 mb-1" style={{width: "120px"}}>Delete</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
