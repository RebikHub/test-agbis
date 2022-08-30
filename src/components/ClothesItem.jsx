import React, { useEffect, useState } from 'react';
import '../styles/main.css';

export default function ClothesItem({item}) {
  const [none, setNone] = useState('none');
  const [amount, setAmount] = useState(1);

  function clickAddBtn() {
    setAmount(1);
    if (none === 'none') {
      setNone('');
    } else {
      setNone('none')
    };
  };

  useEffect(() => {
    if (amount < 1) {
      setNone('none');
    };
  }, [amount]);

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
              onClick={() => setAmount((prev) => prev - 1)}/>
            <p className='amount-number'>{amount}</p>
            <span
              className='amount-increment'
              onClick={() => setAmount((prev) => prev + 1)}/>
          </div>
        </div>
      </div>
    </div>
  )
}
