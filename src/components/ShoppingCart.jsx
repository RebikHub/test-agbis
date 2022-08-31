import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ShoppingCart() {
  const cart = useSelector((state) => state.sliceCart);
  // console.log(cart);
  const [amount, setAmount] = useState(1);
  const [none, setNone] = useState(false);

  if (!cart.length) {
    return null;
  };

  return (
    <div className={none ? 'cart-long' : 'cart'}>
      <div className='cart-body'>
        <div className='cart-header'>
          <p className='cart-title'>Корзина</p>
          <div className='cart-amount'>
            <p className='cart-amount-text'>Количество услуг в корзине</p>
            <p className='cart-amount-number'>2</p>
          </div>
          <div className='cart-sum'>
            <p className='cart-sum-text'>Сумма заказа</p>
            <p className='cart-sum-number'>1920&#8381;</p>
          </div>
        </div>

        {none &&
        <div>
          {cart.map((e,i) => (
            <div className='order' key={i}>
              <div className='order-title'>
                <p className='order-title-text'>{e.service}</p>
              </div>
              <div className='order-description'>
                <span className='order-desc-close'/>
                {e.clothes.map((el, index) => (
                <div className='order-desc-body' key={index}>
                  <p className='order-desc-text'>{el.name}</p>
                  <div className='order-desc-amount'>
                    <p className='order-desc-sum'>{el.price}&#8381;</p>
                    <div className='order-desc-add'>
                      <span
                        className='order-decrement'
                        onClick={() => setAmount((prev) => prev - 1)}/>
                      <p className='order-number'>{el.amount}</p>
                      <span
                        className='order-increment'
                        onClick={() => setAmount((prev) => prev + 1)}/>
                    </div>
                  </div>
                </div>))}
              </div>
            </div>
          ))}
          <button className='order-btn' type='button'>Оформить заказ</button>
        </div>
        }
      </div>

      <button className={`cart-arrow-btn${none ? '-invert' : ''}`} type='button' onClick={() => setNone(!none)}/>
    </div>
  )
}
