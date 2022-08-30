import React, { useEffect, useState } from 'react';
import '../styles/main.css';

const list = {
  services: ['Химчистка', 'Аквачистка', 'Ремонт одежды', 'Химчистка', 'Аквачистка', 'Ремонт одежды'],
  clothes: ['Аксессуары', 'Верхняя одежда', 'Деловой костюм', 'Джинса', 'Куртка и пуховик', 'Пальто и плащ']
};

export default function ServicesList() {
  const [id, setId] = useState({
    service: null,
    clothes: null
  });

  useEffect(() => {
    console.log(id.clothes !== null);
  }, [id.clothes]);

  function clickService(index) {
    if (id.service === null) {
      setId({...id, service: index});
    } else {
      setId({...id, service: null});
    };
  };

  function clickClothes(index) {
    if (id.clothes === null) {
      setId({...id, clothes: index});
    } else {
      setId({...id, clothes: null});
    };
  };

  return (
    <nav className='nav'>
      {list.services.map((e, i) => (
        <div className='nav-service' key={i}>
          <p
            className={`nav-title${i === id.service ? '-focus' : ''}`}
            onClick={() => clickService(i)}>
            {e}
            <span className={`nav-img${i === id.service ? '-invert' : ''}`}/>
          </p>
          <ul className={`service-list ${i === id.service ? '' : 'none'}`}>
            {id.service !== null && list.clothes.map((el, index) => (
              <li
                className={`clothes-item${index === id.clothes ? '-focus' : ''}`}
                onClick={() => clickClothes(index)}
                key={index}>
                <p className='clothes-text'>{el}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
