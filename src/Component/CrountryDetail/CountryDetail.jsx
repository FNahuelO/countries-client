import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../../redux/actions';
import style from './Country.module.css'
import { Link } from 'react-router-dom';
import spinner from '../../extras/spinner.gif'

const Countrydetail = (props) => {
    const [loading, setLoading] = useState(true)
    const code =  props.match.params.id
    const dispatch = useDispatch()
    
    useEffect(() =>{ 
        dispatch(getCountry(code))
        setTimeout(() => {
            setLoading(false)
        }, 500);
    },[code,dispatch])
    
    const country = useSelector(state => state.country)
    
    const { name, id , flag, continente, capital, subregion, area, population, actividads} = country;
    
    return (
        <div className={style.container}>
            {loading ? <img src={spinner} alt="" style={{width: '150px'}} /> : <><div id={style.caja}>
               <Link to={'/countries'}><button><span>BACK</span></button></Link>
            <div className={style.card}>
                    <h3>{name} ({id})</h3>
                    <img src={flag} id={style.bandera} alt='' />
                    <div className={style.info}>
                        <h3>Continente: <span>{continente}</span></h3>
                        <h3>Capital: <span>{capital}</span></h3>
                        <h3>Subregión: <span>{subregion}</span></h3>
                        <h3>Área: <span> {new Intl.NumberFormat('es').format(area)} KM²</span></h3>
                        <h3>Población: <span>{new Intl.NumberFormat('es').format(population)} Hab.</span></h3>
                    </div>
                </div><div className={style.activity}>
                        <h3>Actividades</h3>
                        <div className={style.info}>
                            {actividads?.length ? actividads.map(activity => (
                                <div className={style.aux}>
                                    <h3>Nombre:<span>{activity.name} </span> </h3>
                                    <h3>Duracion:<span>{activity.duracion}</span>  Hs  </h3>
                                    <h3>Dificultad:<span>{activity.dificultad}</span> </h3>
                                    <h3>Temporada:<span>{activity.temporada}</span></h3>
                                </div>))

                                : <h1>No activities yet</h1>}

                        </div>
                    </div>
           </div></>}            
           
        </div>
    );
}

export default Countrydetail;
