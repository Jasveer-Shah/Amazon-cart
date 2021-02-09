
import './App.css';
import  React, { useState } from 'react';
import Header from "./components/Header";
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import data from './Data';

function App() {
const [ cartItems, setCartItems ] = useState(data);     
console.log(cartItems);
// useState returns an array of value and the function to change the value.
// and we simply catch that by destructring it
  return (
      <div className='App'>
         <Header title= "Amazon Cart"/>
        <div className="App-main">
          
           <CartItems items= {cartItems}/> 
           <CartTotal/>
        </div>
           
      </div>
  );
}

export default App;
