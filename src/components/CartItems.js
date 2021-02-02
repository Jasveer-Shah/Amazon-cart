import React from 'react'
import "./CartItems.css"
import CartItem from "./CartItem"
function CartItems() {
    return (
        <div className="CartItems">
        <h1>Shopping Cart</h1>
        <hr/>   
        <CartItem/>
        
        </div>
    )
}

export default CartItems
