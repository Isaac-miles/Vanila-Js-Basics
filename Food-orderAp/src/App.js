import { useState } from 'react';

import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/cartProvider';


function App() {

  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = ()=>{
     setcartIsShown(true);
  }

   const hideCartHandler = () => {
    setcartIsShown(false);
   }
  return (
    < CartProvider >
     {cartIsShown && < Cart onClose = { hideCartHandler }  />}
      <Header onShowCart = {showCartHandler}/>
      <main>
     <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
