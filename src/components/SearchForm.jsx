import React, { useEffect, useState } from 'react';
import '../styles/main.css';

export default function SearchForm() {
  const [value, setValue] = useState('');
  const [styleClass, setStyle] = useState(false);
  const [none, setNone] = useState('none');

  function inputForm(ev) {
    setValue(ev.target.value);
    if (ev.target.value.length > 15) {
      setNone('');
    }
  };

  function searchOrClose() {
    if (styleClass) {
      setValue('');
      setNone('none');
    };
  };

  useEffect(() => {
    if (value !== '') {
      setStyle(true);
    } else {
      setStyle(false);
    };
  }, [value]);

  return (
    <form className={`form${none === '' ? '-line' : ''}`}>
      <input
        className='form-input'
        type="text"
        placeholder='Поиск'
        value={value}
        onChange={inputForm}/>
      <span
        className={styleClass ? 'form-img-active' : 'form-img'}
        onClick={searchOrClose}/>
      <p className={`form-error ${none}`}>Слишком длинный запрос</p>
    </form>
  )
}
