import React from 'react'
import Country from './Country';
import style from './Countries.module.css';

export function Countries({ countries }) {
  return (
    <div className={style.container}>
      { countries?.map(country => <Country 
          key= {country.id}
          id = {country.id}
          flag = {country.flag}
          name = {country.name}
          continents = {country.continente}
      />)
      }
      </div>
  )
}

export default Countries;
