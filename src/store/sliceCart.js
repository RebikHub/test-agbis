import { createSlice } from "@reduxjs/toolkit";

// {
//   service: 'Химчистка',
//   clothes: [
//     {
//       name: 'Пальто, полупальто с подстежкой из натурального меха',
//       price: 1400,
//       amount: 1
//     }
//   ]
// }

export const sliceCart = createSlice({
  name: 'sliceCart',
  initialState: {
    order: []
  },
  reducers: {
    addOrder: (state, actions) => {
      const list = [...state.order];

      if (list.some((e) => e.service === actions.payload.service)) {
        list.map((el) => {
          if (el.service === actions.payload.service) {
            if (el.clothes.some((elem) => elem.name === actions.payload.clothes.name && elem.price === actions.payload.clothes.price)) {
              el.clothes.map((elem) => {
                if (elem.name === actions.payload.clothes.name && elem.price === actions.payload.clothes.price) {
                  elem.amount = actions.payload.clothes.amount;
                };
              });
            } else {
              el.clothes.push(actions.payload.clothes);
            }
          }
        })
      } else {
        list.push({
          service: actions.payload.service,
          clothes: [actions.payload.clothes]
        })
      };

      state.order = [...list];
    },
    deleteOrder: (state, actions) => {
      const list = [...state.order];
      let index = null;
      list.map((e,i) => {
        if (e.service === actions.payload.service) {
          e.clothes = e.clothes.filter((el) => el.name !== actions.payload.clothes.name && el.price !== actions.payload.clothes.price);
        };
      });

      state.order = list.filter((e) => e.clothes.length > 0);
    },
    removeService: (state, actions) => {
      state.order = state.order.filter((e) => e.service !== actions.payload);
    }
  }
});

export const {
  addOrder,
  deleteOrder,
  removeService
} = sliceCart.actions;

export default sliceCart.reducer;