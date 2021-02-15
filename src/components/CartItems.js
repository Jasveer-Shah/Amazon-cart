import React from 'react'
import "./CartItems.css"
import CartItem from "./CartItem"

function CartItems({ items, setCartItems }) {
   const changeQuantityItem = (e, index) => {
       
       console.log(e.target.value, 'what is the value');
     //we have the select on quantity - e.target.value
       //pass in the index
       // using the index we need to change the quantity to the selected one from the selected option
       //we need to update the items ( in app.js)
       //now we have index and value.Now we need to change the quantity using index. we want to access items.We want to change the quantity in the captured value.
       const newItems = [...items];
       newItems[index].quantity = e.target.value;
       setCartItems(newItems);

       //16 we get a full copy of items
       //we set the quantity of that item into the new value 
       //then we set the new cart item to the new items
   }

    const deleteItem = (indexToBeDeleted) => {

       const newItems = items.filter((object, index) => {
           return index!== indexToBeDeleted;
       })
       console.log(newItems);
       setCartItems(newItems);

        //create deleteItem() = in cartItem
        //pass the function from CartItems to CartItem
         //pass the index to know which item to delete
       //.filter() tha gives back an array without remove item.It is an Es6 function based on the index.
       // update the items using the setCartItems function
    };
 console.log(items);

    return (
        <div className="CartItems">
           <h1>Shopping Cart</h1>
           <hr/>  
           <div className="CartItems-items">
            {items.map((item, index) =>
             <CartItem
                index = {index}
                item={item}
                key={index} 
                changeQuantityItem = {changeQuantityItem}
                deleteItem = {deleteItem}
                />
                 )} 
                 
           </div> 
        
        </div>
    )
}

export default CartItems;
