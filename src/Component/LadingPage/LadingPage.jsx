import React from 'react';
import { Link } from 'react-router-dom';
import style from './LadingPage.module.css';

export default function Inicio() {
  return (
    <div className={style.container}>
      <div>
        <>
          <h1>HENRY</h1>
          <h2>PI COUNTRIES</h2>
        </>
      <Link to='/countries'><button className={style.btn}><span>Entrá y conocé</span></button></Link>
      </div>
    </div>
  )
}
