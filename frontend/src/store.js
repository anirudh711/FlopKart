import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer.js";
import { cartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const initialState = {cart:{cartItems:cartItemsFromStorage}};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
