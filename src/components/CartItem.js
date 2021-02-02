import React from 'react'
import './CartItem.css';

function CartItem() {
    return (
        <div className="CartItem">
           <div className="CartItem-image">
             <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202003?wid=470&hei=556&fmt=png-alpha&.v=1583541592591" alt="image"/>
           </div>
           <div className="CartItem-info">
             <div className="info-title">
                 <h2>Apple ipad pro</h2>
             </div>
             <div className="info-stock">
                  In Stock
             </div>
             <div className="item-actions">
  
             
                 <div className="item-quantity">
  
                 </div>
                 <div className="item-delete">
                      
                      delelte
                 </div>
             </div>
           </div>
           <div class="CartItems-price">
              $769.00
           </div>  
        </div>
    )
}

export default CartItem
