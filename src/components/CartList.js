import React from 'react'
import {useCart} from "react-use-cart"
import { Redirect } from "react-router-dom";
import CartItems from './CartItems';    

const CartList = ({isLoggedIn}) => {
    const {
        isEmpty,
        items,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()

    if (!isLoggedIn) return <Redirect to="/login" />
    
    if(isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>

    const displayCards = items.map((merch) => (
        <CartItems 
        key={merch.id}
        merch={merch}
        quanitity={merch.quantity}
        updateItemQuantity={updateItemQuantity} 
        removeItem={removeItem}/>
      ));

  return (
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                {displayCards}
            </div>
            <div className='col-auto ms-auto'>
                <h2>Total Price: Ksh {cartTotal}</h2>
            </div>
            <div className='col-auto'>
                <button
                className='btn btn-danger m-2'
                onClick={() => emptyCart()}
                >Clear Cart
                </button>
            </div>
        </div>
    </section>
  )
}

export default CartList