import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, addOrder, deleteOrder } from '../store/sliceCart';

export default function ShoppingCart() {
  const { order } = useSelector((state) => state.sliceCart);
  const dispatch = useDispatch();
  const [none, setNone] = useState(false);
  const [sum, setSum] = useState({
    price: 0,
    amount: 0
  })

  function updateCart(object) {
    if (object.clothes.amount > 0) {
      dispatch(addOrder(object));
    } else {
      dispatch(deleteOrder(object));
    };
  };

  function removeOrder(service) {
    dispatch(removeService(service));
  };

  useEffect(() => {
    let amount = 0;
    let price = 0;
    order.map((e) => {
      e.clothes.map((el) => {
        amount += el.amount;
        price += el.price * el.amount;
      })
    });

    setSum({price: price, amount: amount});

  }, [order]);

  if (!order.length) {
    return null;
  };

  return (
    <React.Fragment>
      <div className={none ? 'cart-long' : 'cart'}>
        <div className='cart-body'>
          <div className='cart-header'>
            <p className='cart-title'>Корзина</p>
            <div className='cart-amount'>
              <p className='cart-amount-text'>Количество услуг в корзине</p>
              <p className='cart-amount-number'>{sum.amount}</p>
            </div>
            <div className='cart-sum'>
              <p className='cart-sum-text'>Сумма заказа</p>
              <p className='cart-sum-number'>{sum.price}&#8381;</p>
            </div>
          </div>

          {none &&
          <div>
            {order.map((e,i) => (
              <div className='order' key={i}>
                <div className='order-title'>
                  <p className='order-title-text'>{e.service}</p>
                </div>
                <div className='order-description'>
                  <span className='order-desc-close' onClick={() => removeOrder(e.service)}/>
                  {e.clothes.map((el, index) => (
                  <div className='order-desc-body' key={index}>
                    <p className='order-desc-text'>{el.name}</p>
                    <div className='order-desc-amount'>
                      <p className='order-desc-sum'>{el.price}&#8381;</p>
                      <div className='order-desc-add'>
                        <span
                          className='order-decrement'
                          onClick={() => updateCart({
                            service: e.service,
                            clothes: {
                              name: el.name,
                              price: el.price,
                              amount: el.amount - 1
                            }
                          })}/>
                        <p className='order-number'>{el.amount}</p>
                        <span
                          className='order-increment'
                          onClick={() => updateCart({
                            service: e.service,
                            clothes: {
                              name: el.name,
                              price: el.price,
                              amount: el.amount + 1
                            }
                          })}/>
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
      {none && <div className='body-background'/>}
    </React.Fragment>
  )
}
