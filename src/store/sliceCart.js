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
  initialState: [
    {
      service: 'Химчистка',
      clothes: [
        {
          name: 'Пальто, полупальто с подстежкой из натурального меха',
          price: 1400,
          amount: 1
        }
      ]
    },
    {
      service: 'Аквачистка',
      clothes: [
        {
          name: 'Пиджак натуральный шелк',
          price: 520,
          amount: 1
        }
      ]
    }
  ],
  reducers: {
    addOrder: (state, actions) => {
      let serviceIndex = null;
      let clothesIndex = null;

      state.map((e, i) => {
        if (e.service === actions.payload.service) {
          serviceIndex = i
        };
      });

      if (serviceIndex) {
        state[serviceIndex].clothes.map((e,i) => {
          if (e.name === actions.payload.clothes.name) {
            e.amount = actions.payload.clothes.amount
          };
        })
      } else {

      }

      console.log(actions.payload)
    },
    deleteOrder: (state, actions) => {
      console.log(actions.payload)
    },
    removeService: (state, actions) => {

    }
  }
});

export const {
  addOrder,
  deleteOrder,
  removeService
} = sliceCart.actions;

export default sliceCart.reducer;