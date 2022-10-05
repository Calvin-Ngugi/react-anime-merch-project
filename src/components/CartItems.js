import React from 'react'

const CartItems = ({merch, updateItemQuantity, removeItem}) => {
  return (
    <table className='table table-light table-hover'>
        <tbody>
            <tr>
                <td style={{width:'20rem'}}>
                    <img src={merch.image} style={{height: '7rem', width: '8rem'}} alt='...'/>
                </td>
                <td className='text-center' style={{width:'20rem'}}>{merch.name}</td>
                <td className='text-end' style={{width:'20rem'}}>{merch.price}</td>
                <td className='text-center' style={{width:'20rem'}}>Quantity ({merch.quantity})</td>
                <td style={{width:'40rem'}}>
                    <button
                     className='btn btn-info ms-2'
                     style={{width:'3rem'}}
                     onClick={()=>updateItemQuantity(merch.id, merch.quantity + 1)}>
                        +
                     </button>
                    <button
                    style={{width:'3rem'}} 
                    className='btn btn-info ms-2'
                    onClick={()=>updateItemQuantity(merch.id, merch.quantity - 1)}>
                        -
                    </button>
                    <button className='btn btn-danger ms-2'
                    style={{width:'8rem'}}
                    onClick={()=>removeItem(merch.id)}
                    >Remove Item</button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default CartItems