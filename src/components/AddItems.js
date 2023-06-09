import React, { useState } from "react";

const AddItems = ({ cards, setCards }) => {
  const [addItemsForm, setAddItemsForm] = useState({
    id: 0,
    name: "",
    image: "",
    type: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    setAddItemsForm({
      ...addItemsForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://anime-merch-api-aa9o.onrender.com/data`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addItemsForm),
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = [...cards, data];
        setCards(newData);
      });
    e.target.reset();
  };

  return (
    <div className="container border-1">
      <h2 className="mb-3 text-center">Contribute to our store</h2>
      <p className="mb-3">
        In case you feel generous or are looking to make a quick buck with items
        already in your possession. We advise you to drop your stock in the
        form, filling in the necessary details.
      </p>
      <div className="row d-flex justify-content-center mt-5 mb-3">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Contribute Items Form</h4>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter name of item"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter merchandise description"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Image address</label>
                <input
                  type="address"
                  className="form-control"
                  name="image"
                  placeholder="Enter image address"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Type</label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="Enter type of merch e.g hoodies, accessories"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Enter the price of item"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default AddItems;



/* <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div> */