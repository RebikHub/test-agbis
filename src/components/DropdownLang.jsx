import React, { useState } from 'react';
import '../styles/header.css';

export default function DropdownLang() {
  const [lang, setLang] = useState('RU');
  const [none, setNone] = useState('none');

  function clickDrop() {
    if (none === 'none') {
      setNone('');
    }
  }

  function choiceLang(ev) {
    if (none === '') {
      console.log(ev.target.innerText);
      setLang(ev.target.innerText);
    }
    setNone('none');
  }

  return (
    <div className='header-lang' onClick={clickDrop}>
      <div className={`lang-selected ${none === '' ? 'none' : ''}`}>
        <p className='lang-text'>{lang}</p>
        <span className='lang-arrow'></span>
      </div>
      <div className={`lang-dropdown ${none}`}>
        <p className='drop-lang lang-text' onClick={choiceLang}>RU</p>
          <span className='drop-line'></span>
        <p className='drop-lang lang-text' onClick={choiceLang}>ENG</p>
          <span className='drop-line'></span>
        <p className='drop-lang lang-text' onClick={choiceLang}>MOL</p>
      </div>
    </div>
  )
}
