import React, { useEffect } from 'react';
import style from './Nav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, alphabetic, population, filterContinent, getActivities, filterActivities } from '../../redux/actions/index';


const Nav = () => {
    const actividades = useSelector(state => state.actividades)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])
    
    const alpha = event => {
        if(event.target.innerHTML.includes('A-Z')){
        dispatch(alphabetic('asc'))
        } else {
            dispatch(alphabetic('desc'))
        }
        
    }

    const poblacion = event => {
        if(event.target.innerHTML.includes('⇡')){
        dispatch(population('asc'))
        } else {
            dispatch(population('desc'))
        }
        
    }
    
    const reset = () => {
        dispatch(getAllCountries())
    }

    const filter = event => {
        switch(event.target.innerHTML){
            case 'África':
                dispatch(filterContinent('africa'))
                break;
            case 'América':
                dispatch(filterContinent('americas'))
                break;
            case 'Antártida':
                dispatch(filterContinent('Antarctic'))
                break;
            case 'Asia':
                dispatch(filterContinent('asia'))
                break;
            case 'Europa':
                dispatch(filterContinent('europe'))
                break;
            case 'Oceanía':
                dispatch(filterContinent('oceania'))
                break;
            default:

        }
    }

    const handlerFilterActivity = (event) => {
        dispatch(filterActivities(event.target.value))
    }
    return (
        <div className={style.conteiner}>
            <div className={style.orden}>
                <span onClick={e => reset(e)}>Ordenar por</span>
                <select className={style.actividades} name="actividades" onChange={event => handlerFilterActivity(event)}>
                        <option>Actividades</option>
                        <option value="all">All Countries</option>
                        {actividades?.map(act => (
                            <option value={act.name}>{act.name}</option>
                        ))}
                    </select>
                <div id={style.list}>
                    <ul>
                        <li onClick={e => alpha(e)}>Nombre A-Z</li>
                        <li onClick={e => alpha(e)}>Nombre Z-A</li>
                        <li onClick={e => poblacion(e)}>Población ⇡</li>
                        <li onClick={e => poblacion(e)}>Población ⇣</li>
                    </ul>
                </div>
            </div>
            <div className={style.filtro}>
                <span onClick={e => reset(e)}>Filtrar por Continente</span>
                <ul>
                    <li onClick={e => filter(e)}>África</li>
                    <li onClick={e => filter(e)}>América</li>
                    <li onClick={e => filter(e)}>Antártida</li>
                    <li onClick={e => filter(e)}>Asia</li>
                    <li onClick={e => filter(e)}>Europa</li>
                    <li onClick={e => filter(e)}>Oceanía</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
