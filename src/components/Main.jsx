import React, { useState } from 'react';
import '../styles/main.css';
import ClothesList from './ClothesList';
import SearchForm from './SearchForm';
import ServicesList from './ServicesList';

const clothes = {
  outerwear: [
    {
      name: 'Пальто, полупальто с подстежкой из натурального меха',
      price: 1400
    },
    {
      name: 'Ветровка',
      price: 520
    },
    {
      name: 'Ветровка (натуральный шелк)',
      price: 3000
    },
    {
      name: 'Пальто, полупальто с подстежкой из натурального меха',
      price: 11000
    }
  ],
  businessSuit: [
    {
      name: 'Пиджак',
      price: 14000
    },
    {
      name: 'Пиджак натуральный шелк',
      price: 520
    },
    {
      name: 'Пиджак с коротким рукавом без подклада',
      price: 3000
    },
    {
      name: 'Пиджак натуральный шёлк с коротким рукавом',
      price: 11000
    }
  ]
}

export default function Main() {
  const [listClothes, setListClothes] = useState([]);

  function choiceClothes(list) {
    if (list === 'Верхняя одежда') {
      setListClothes(clothes.outerwear);
    };

    if (list === 'Деловой костюм') {
      setListClothes(clothes.businessSuit);
    };
  }

  return (
    <main className='main'>
      <section className='main-left'>
        <div className='main-title'>
          <p className='main-text'>Услуги</p>
        </div>
        <ServicesList choiceClothes={choiceClothes}/>
      </section>

      <section className='main-body'>
        <SearchForm/>
        <div className='main-description'>
          <p className='description-text'>
            Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.
          </p>
        </div>
        <ClothesList list={listClothes}/>
      </section>
    </main>
  )
}
