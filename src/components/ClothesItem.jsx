import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder, deleteOrder } from '../store/sliceCart';
import '../styles/main.css';

export default function ClothesItem({item, service}) {
  const [none, setNone] = useState('none');
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  function clickAddBtn() {
    setAmount(1);
    if (none === 'none') {
      setNone('');
      dispatch(addOrder({
        service: service,
        clothes: {
          name: item.name,
          price: item.price,
          amount: 1
        }
      }));
    };
  };

  function incAmount() {
    setAmount((prev) => prev + 1);
  };

  function decAmount() {
    setAmount((prev) => prev - 1);
  };

  useEffect(() => {
    if (amount < 1) {
      setNone('none');
      dispatch(deleteOrder({
        service: service,
        clothes: {
          name: item.name,
          price: item.price,
          amount: 0
        }
      }));
    };

    if (none !== 'none') {
      dispatch(addOrder({
        service: service,
        clothes: {
          name: item.name,
          price: item.price,
          amount: amount
        }
      }));
    };

  }, [amount, none]);

  return (
    <div className='clothes-list-item'>
      <div className='clothes-left'>
        <p className='clothes-name'>{item.name}</p>
        <p className='clothes-more'>Подробнее<span className='more-img'/></p>
      </div>
      <div className='clothes-order'>
        <p className='clothes-price'>{item.price}&#8381;</p>
        <div className='clothes-add'>
          <button
            className={none === 'none' ? 'add-btn' : 'none'}
            type='button'
            onClick={clickAddBtn}/>
          <div className={`add-amount ${none}`}>
            <span
              className='amount-decrement'
              onClick={decAmount}/>
            <p className='amount-number'>{amount}</p>
            <span
              className='amount-increment'
              onClick={incAmount}/>
          </div>
        </div>
      </div>
    </div>
  )
}
