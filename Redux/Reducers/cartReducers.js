import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants";

const cartReducers = (state = {cartItems : []}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const existingItem = state.cartItems.find(x => x.id === action.payload.id);
            if(existingItem){
                return {...state, cartItems : state.cartItems.map(x => x.id === existingItem.id ? action.payload : x  )};
            
            }
            return {...state, cartItems:[...state.cartItems, action.payload]};
        case REMOVE_FROM_CART:
            return {...state , cartItems : state.cartItems.filter(x => x.id !== action.payload) }
        case CLEAR_CART:
             return {...state , cartItems : []};       
    }
    return state;
}


export default cartReducers;