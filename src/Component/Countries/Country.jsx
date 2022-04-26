import React from 'react';
import { Link } from 'react-router-dom';
import style from './Country.module.css';

function Country(props) {
  return (
    <div className={style.container}>
        <Link to={`/countries/${props.id}`}><img src={props.flag} alt='bandera'/></Link>
        <Link to={`/countries/${props.id}`}><h3>{props.name}</h3></Link>
        <h4>{props.continents}</h4>
    </div>
  )
}

export default Country