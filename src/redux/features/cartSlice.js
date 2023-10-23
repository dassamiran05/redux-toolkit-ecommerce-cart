import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

// card slice
const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const exists = state.carts.find((item) => item.id === action.payload.id);
      if (exists) {
        state.carts = state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...exists, qnty: exists.qnty + 1 }
            : item
        );
      } else {
        state.carts = [...state.carts, { ...action.payload, qnty: 1 }];
      }
      // const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
      // if (IteamIndex >= 0) {
      //     state.carts[IteamIndex].qnty += 1
      // } else {
      //     const temp = { ...action.payload, qnty: 1 }
      //     state.carts = [...state.carts, temp]
      // }
    },

    // remove perticular iteams
    removeToCart: (state, action) => {
      state.carts = state.carts.filter((ele) => ele.id !== action.payload);
    },

    // remove single iteams
    removeSingleIteams: (state, action) => {
      const exists = state.carts.find((item) => item.id === action.payload.id);
      if (exists && exists.qnty > 1) {
        state.carts = state.carts.map((item) =>
          item.id === action.payload.id
            ? { ...exists, qnty: exists.qnty - 1 }
            : item
        );
      } else {
        state.carts = state.carts.filter((item) => item.id !== exists.id);
      }
    },

    // remove single iteams
    // removeSingleIteams:(state,action)=>{
    //     const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

    //     if(state.carts[IteamIndex_dec].qnty >=1){
    //         state.carts[IteamIndex_dec].qnty -= 1
    //     }

    // },

    // clear cart
    emptycartIteam: (state, action) => {
      state.carts = [];
    },
  },
});

export const { addToCart, removeSingleIteams, removeToCart, emptycartIteam } =
  cartSlice.actions;

export default cartSlice.reducer;
