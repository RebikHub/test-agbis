import React from 'react';
import '../styles/main.css';
import ClothesItem from './ClothesItem';

export default function ClothesList({list, service}) {
  return (
    <ul className='clothes-list'>
      {list.map((e,i) => (
          <li key={i}>
            <ClothesItem item={e} service={service}/>
          </li>
      ))}
    </ul>
  )
}
