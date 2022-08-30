import React, { useState } from 'react';
import '../styles/main.css';

export default function ClothesItem({item}) {
  const [none, setNone] = useState('none');

  function clickAddBtn() {
    if (none === 'none') {
      setNone('');
    } else {
      setNone('none')
    }
  }

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
            onClick={clickAddBtn}></button>
          <div className={`add-amount ${none}`}>
            <span className='amount-decrement'></span>
            <p className='amount-number'>1</p>
            <span className='amount-increment'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
