import React from "react";

const Card = ({ merch }) => {
  return (
    <div className="col">
    <div className="card h-100">
      <img src={merch.image} className="card-img-top" alt="..." height={330}/>
      <div className="card-body">
        <h4 className="card-title">{merch.name}</h4>
        <small className="text-muted">{merch.type}</small>
        <p className="card-text">{merch.description}</p>
        {/* <div className="buttons">
        <button onClick={()=>console.log("add sth")} className="btn btn-primary">Purchase</button>
        <button onClick={()=>console.log("add sth")} className="btn btn-danger">Delete</button>
      </div> */}
      </div>
      </div>
    </div>
  );
};

export default Card;
