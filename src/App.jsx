import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ShoppingCart from './components/ShoppingCart';

const order = [
  {
    service: 'Химчистка',
    clothes: 'Пальто, полупальто с подстежкой из натурального меха',
    amount: 1,
    price: 1400
  },
  {
    service: 'Аквачистка',
    clothes: 'Пиджак натуральный шелк',
    amount: 1,
    price: 520
  }
]

export default function App() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        {order.length ? <ShoppingCart order={order}/> : null}
      </React.Fragment>
    );
}
