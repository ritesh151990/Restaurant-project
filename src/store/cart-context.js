import React from "react";

const CartContext=React.createContext({
    items:[],
   
    addItem: (item) =>{},
    removeitem:(id) =>{}
});

export default CartContext;