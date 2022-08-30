import React from 'react';
import '../styles/main.css';
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

      <section className='main-body'></section>
    </main>
  )
}
