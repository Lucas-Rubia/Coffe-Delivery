import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const combinedReducers = combineReducers({
  cartModel: cartSlice,
});

const rootReducer = (state: any, action: any) => {
    return combinedReducers(state, action);
}

export default configureStore({
    reducer: rootReducer,
})