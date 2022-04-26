import React from 'react';
import { Link } from 'react-router-dom';
import style from './About.module.css';
import express from '../../extras/expressjs.svg';
import react from '../../extras/react.svg';
import redux from '../../extras/redux.svg';
import postgres from '../../extras/postgresql.svg';
import sequelize from '../../extras/sequelize.svg';

const About = () => {
    return (
        <div className={style.container}>
            <div id={style.caja}>
            <Link to={'/countries'}><button id={style.button}><span>BACK</span></button></Link>
                <div className={style.cont}>
                    <h2>Individual Project - Henry Countries</h2>
                    <div className={style.obj}>
                    <h3>Objetivo</h3>
                    <p>Crear una aplicación en la cual se pueda ver información de distintos paises utilizando la api externa <Link to={'https://restcountries.com/'}><span>restcountries</span></Link> y a partir de ella poder, entre otras cosas:</p>
                    <ul>
                        <li>Buscar paises</li>
                        <li>Filtrarlos / Ordenarlos</li>
                        <li>Crear actividades turísticas</li>
                    </ul>
                </div>
                <div >
                    <h2>Tecnologías usadas</h2>
                    <div className={style.tecnologias}>
                        <img className={style.logo} src={react} alt="react" />
                        <img className={style.logo} src={express} alt="express" id={style.express} />
                        <img className={style.logo} src={redux} alt="" />
                        <img className={style.logo} src={postgres} alt="" id={style.postgres}/>
                        <img className={style.logo} src={sequelize} alt="" />
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;
