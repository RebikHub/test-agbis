import React from 'react';
import '../styles/main.css';

export default function SearchForm() {
  return (
    <form className='form'>
      <input className='form-input' type="text" placeholder='Поиск'/>
      <span className='form-img'></span>
    </form>
  )
}
