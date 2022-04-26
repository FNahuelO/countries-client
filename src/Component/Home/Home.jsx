import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Countries from '../Countries/Countries.jsx';
import style from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getCountri } from '../../redux/actions/index';
import gif from '../../extras/mundi-gif.gif'
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';

const Home = () => {
    const [pais, setPais] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPorPag = 9;
    let lastCountry,firtsCountry = 0
    const countries = useSelector(state => state.countries)
    const countriesAct = useSelector(state => state.countryAct)

    const dispatch = useDispatch()
    
    useEffect(() =>{ 
        dispatch(getAllCountries())
    },[dispatch])
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(getCountri(pais))
        }

    const handleChange = event => {
        setPais(event.target.value)
    }

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }

    if(currentPage === 1){
        firtsCountry = 0 ;
        lastCountry = 0 ;
    } else {
        firtsCountry = currentPage - 2
        lastCountry = currentPage - 1
    }

    const indexOfLastCountry = currentPage * countriesPorPag;
    const indexOfFirtsCountry = indexOfLastCountry - countriesPorPag;
    if(!countriesAct.length){
        var currentCountries = countries.slice(indexOfFirtsCountry + firtsCountry,indexOfLastCountry + lastCountry)
    } else {
        currentCountries = countriesAct.slice(indexOfFirtsCountry + firtsCountry,indexOfLastCountry + lastCountry)
    }
    

   
    return (
        <div className={style.conteiner}>
            <Nav />
            <Countries countries={currentCountries} />
            <div className={style.nav}>
                <div className={style.logo}>
                    <span>COUNTRIES APP</span>
                    <img src={gif} alt="" />
                    
                </div>
                <form className={style.form} onSubmit={e => handleSubmit(e)}>
                    <input className={style.input} type="text" placeholder='Search Country...' onChange={(e) => handleChange(e)}/>
                    <button className={style.btn} type="submit">Search</button>
                </form>
                <div className={style.button}>
                        <Link to='/'><button className={style.btn}>Inicio</button></Link>
                        <Link to='/activity'><button className={style.btn}>Add Activity</button></Link>
                        <Link to='/about'><button className={style.btn}>About</button></Link>
                </div>
            </div>
        <div className={style.pagination}>
            <Pagination Paginate={paginate}/>
        </div>
        </div>
    );
}

export default Home;
