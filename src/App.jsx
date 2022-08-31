import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ShoppingCart from './components/ShoppingCart';

export default function App() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <ShoppingCart/>
      </React.Fragment>
    );
}
