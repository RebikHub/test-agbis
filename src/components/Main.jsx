import React from 'react';
import '../styles/main.css';
import ClothesList from './ClothesList';
import SearchForm from './SearchForm';
import ServicesList from './ServicesList';

export default function Main() {
  return (
    <main className='main'>
      <section className='main-left'>
        <div className='main-title'>
          <p className='main-text'>Услуги</p>
        </div>
        <ServicesList/>
      </section>

      <section className='main-body'>
        <SearchForm/>
        <div className='main-description'>
          <p className='description-text'>
            Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.
          </p>
        </div>
        <ClothesList/>
      </section>
    </main>
  )
}
