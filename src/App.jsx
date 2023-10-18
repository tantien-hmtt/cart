import "./index.css";
import NavBar from "./components/NavBar";
import CartList from "./components/CartList";
import FooterCart from "./components/FooterCart";
import { useState } from "react";
import CartValue from "./data/CartValue";

function App() {
  const [carts,setCart] = useState(CartValue); 
  
function cartTotal() {
    let cartTotal = 0; 
    for(let i = 0; i < carts.length; i++){
      cartTotal = cartTotal + carts[i].amount;
      
    }
    return cartTotal;
}
cartTotal();

function priceTotal() {
  let priceTotal = 0; 
  for(let i = 0; i < carts.length; i++){
    priceTotal = priceTotal + carts[i].amount*carts[i].price;
    
  }
  return priceTotal;
}
priceTotal(); 

const handelClickRemove = (id) => {
  const newStateCart = carts.filter(function(cartItem){
    if (cartItem.id != id){
      return true;
    }
  })
  setCart(newStateCart);
  console.log (newStateCart);
}

const handelClickInc = (cartItem) => {
  const indexCart = carts.findIndex(function(cartItemLoop){
    return cartItemLoop.id == cartItem.id; 
  })

  const cartNewState = [...carts]; //clone newstate
  cartNewState[indexCart] = {...cartItem}; // clone newobj 
  cartNewState[indexCart].amount++; 
  setCart(cartNewState);

}

const handelClickDec = (cartItem) => {
  const indexCart = carts.findIndex(function(cartItemLoop){
    return cartItemLoop.id == cartItem.id; 
  })

  console.log (indexCart);

  const cartNewState = [...carts]; //clone newstate
  cartNewState[indexCart] = {...cartItem}; // clone newobj 
  cartNewState[indexCart].amount--; 
  setCart(cartNewState);
}



  return (
    <>
      <main>
        <NavBar cartTotal={cartTotal()}/>

        <section className="cart">
          {/* cart header */}
          <header>
            <h2>Giỏ hàng</h2>
          </header>
          {/* cart items */}

          <CartList carts={carts} 
          onClickRemove = {handelClickRemove} 
          onClickInc = {handelClickInc}
          onClickDec = {handelClickDec}
          />

          {/* cart footer */}
          <FooterCart priceTotal={priceTotal()}/>
        </section>
      </main>
    </>
  );
}

export default App;
