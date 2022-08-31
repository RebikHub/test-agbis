import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/main.css';

export default function ServicesList({choiceClothes}) {
  const services = useSelector((state) => state.sliceData)
  const [id, setId] = useState({
    service: null,
    clothes: null
  });

  function clickService(index) {
    if (id.service === null) {
      setId({...id, service: index});
    } else {
      setId({clothes: null, service: null});
    };
  };

  function clickClothes(index, list, service) {
    if (id.clothes === null) {
      setId({...id, clothes: index});
      choiceClothes(list, service);
    } else if (id.clothes === index) {
      setId({...id, clothes: null});
    } else {
      setId({...id, clothes: index});
      choiceClothes(list);
    };
  };

  return (
    <nav className='nav'>
      {services.map((e, i) => (
        <div className='nav-service' key={i}>
          <p
            className={`nav-title${i === id.service ? '-focus' : ''}`}
            onClick={() => clickService(i)}>
            {e.name}
            <span className={`nav-img${i === id.service ? '-invert' : ''}`}/>
          </p>
          <ul className={`service-list ${i === id.service ? '' : 'none'}`}>
            {e.clothes.map((el, index) => (
              <li
                className={`clothes-item${index === id.clothes ? '-focus' : ''}`}
                onClick={() => clickClothes(index, el.clothes_type, e.name)}
                key={index}>
                <p className='clothes-text'>{el.type}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
