import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";



function App() {
  const [cartisShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  };
  const hideCartHandler=()=>{
    setCartIsShown(false);
  };

  return (
    <Fragment>
     {cartisShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
