import { createStore , combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";
import cartReducers from "./Reducers/cartReducers";

const initialState ={
   userSignin:{
       userInfo:  null
   },
   cart:{
       cartItems: [],
       wishlistItems: [],
       deliveryInfo: {}       
   }
};


const reducers = combineReducers({
   cart : cartReducers
});



const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));


export default store;