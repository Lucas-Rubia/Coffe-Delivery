import { createSlice } from "@reduxjs/toolkit";

interface Product {
    titulo: string;
    image: string;
    price: number;
    count: number;
}

interface CartState{
    products: Product[];
}

const initialCartState: CartState = {
  products: [],
};

export const slice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setAddCart(state, { payload }: { payload: Product }) {
      const productIndex = state.products.findIndex(
        (product) => product.titulo === payload.titulo
      );

      if (productIndex >= 0) {
        state.products[productIndex].count += payload.count;
      } else {
        state.products.push(payload);
      }
    },

    removeFromCart(state, { payload }: { payload: Product["titulo"] }) {
      state.products = state.products.filter((product) => product.titulo !== payload);
    },

    removeItemsProduct(state, { payload }: { payload: Product["titulo"] }) {
        const productIndex = state.products.findIndex(
            (product) => product.titulo === payload
          );
    
          if (productIndex >= 0) {
            state.products[productIndex].count = Math.max(
              state.products[productIndex].count - 1,
              1
            );
          }
    },
    addItemsProduct(state, { payload }: { payload: Product["titulo"] }) {
        const productIndex = state.products.findIndex(
            (product) => product.titulo === payload
          );
    
          if (productIndex >= 0) {
            state.products[productIndex].count = Math.min(state.products[productIndex].count + 1, 9);
          }
    },
  },
});

export const {setAddCart, removeItemsProduct,addItemsProduct,removeFromCart} = slice.actions;


export const selectCart = (state: {cartModel: CartState}) => state.cartModel

export default slice.reducer;