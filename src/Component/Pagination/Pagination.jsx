import React from 'react';
import { useSelector } from 'react-redux';
import style from './Pagination.module.css'

const Pagination = ({ Paginate }) => {
    const countryPorPag = 10;
    const countries = useSelector(state => state.countries)
    const countriesAct = useSelector(state => state.countryAct)
    const pageNumbers = [];

    if(countriesAct.length){
        for(let i = 1; i <= Math.ceil(countriesAct.length/countryPorPag); i++){
            pageNumbers.push(i)
        }
    } else {
        for(let i = 1; i <= Math.ceil(countries.length/countryPorPag); i++){
            pageNumbers.push(i)
        }
    }

    return (
       <div className={style.pagination}>
            {pageNumbers.map(number => (
                <p key={number} className={style.numPag}>
                    <button onClick={() => Paginate(number)} className={style.pagLink}>
                        {number}
                    </button>
                </p>
             ))}
            
        </div>
    );
}

export default Pagination;
