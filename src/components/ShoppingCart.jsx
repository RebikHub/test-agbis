import React, { useState } from 'react';

export default function ShoppingCart({order}) {
  const [amount, setAmount] = useState();
  const [none, setNone] = useState(false);

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

        {none && order.map((e,i) => (
          <div className='order' key={i}>
            <div className='order-title'>
              <p className='order-title-text'>{e.service}</p>
            </div>
            <div className='order-description'>
              <span className='order-desc-close'/>
              <div className='order-desc-body'>
                <p className='order-desc-text'>{e.clothes}</p>
                <div className='order-desc-amount'>
                  <p className='order-desc-sum'>{e.price}&#8381;</p>
                  <div className='order-desc-add'>
                    <span
                      className='amount-decrement'
                      onClick={() => setAmount((prev) => prev - 1)}/>
                    <p className='amount-number'>{amount}</p>
                    <span
                      className='amount-increment'
                      onClick={() => setAmount((prev) => prev + 1)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`cart-arrow-btn${none ? '-invert' : ''}`} type='button' onClick={() => setNone(!none)}/>
    </div>
  )
}
