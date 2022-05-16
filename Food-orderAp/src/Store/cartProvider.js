import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
    const cartReducer = (state, action) =>{
    if (action.type === 'ADD'){
       
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndx = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndx];

        // let updatedItem;
        let updatedItems;
        if(existingCartItem){
           const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndx] = updatedItem
        } 
        else {
            updatedItems = state.items.concat(action.item);
        }
        return {items: updatedItems, totalAmount:updatedTotalAmount}
    }
    
    if (action.type === 'REMOVE') {
    
     const existingCartItemIndx = state.items.findIndex((item) => item.id === action.id);
     const existingItem = state.items[existingCartItemIndx];
     const updatedTotalAmount = state.totalAmount - existingItem.price;

     let updatedItems;
     if (existingItem.amount === 1){
        updatedItems = state.items.filter(item => item.id !== action.id);
     }
     else{
        const updatedItem = {...existingItem, amount: existingItem.amount -1};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndx] = updatedItem
     }
     return { items: updatedItems, totalAmount: updatedTotalAmount};
     

    }
    return defaultCartState;
};
const CartProvider = props =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler = (item) =>{
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    };
    const removeFromCartHandler = (id) =>{
        dispatchCartAction({
            type: 'REMOVE',
            id: id
         })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler
    };

    return <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;