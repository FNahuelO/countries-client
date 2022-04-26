import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alphabetic } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './Actividad.module.css';

export function validate(input) {
    let errors
    if (!input.name) {
        errors = 'Name is required';
    } else if (!/^[A-Za-z ]+$/i.test(input.name)) {
        errors = 'Name is invalid';
    } else {
        errors = ''
    }

    return errors;
}



const Actividad = () => {
    const [input, setInput] = useState({
        name: '',
        dificultad:'',
        duracion: '',
        temporada: ''
    })
    const [countriesSelected, setCountriesSelected] = useState([])
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch()

    const reset = () => {
        setInput({
            name: '',
            dificultad:'',
            duracion: '',
            temporada: ''
        })
        setCountriesSelected([])
    }

    useEffect(() =>{ 
        dispatch(alphabetic('asc'))
    },[dispatch])

    const countries = useSelector(state => state.countries)


    const handlerInputChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        const id = countriesSelected.map(country => country.id)
        const data = [input,id]
        post(data)
      }

    const handlerCountries = event => {        
        const country = event.target.value.split(' ')
        if(country.length > 2){
            const id = country.pop()
            const flag = country.pop()
            const name = country.join(' ')
            setCountriesSelected([
                ...countriesSelected,{
                    name,
                    id,
                    flag
        }])
    } else {
             setCountriesSelected([
            ...countriesSelected,{
                name: country[0],
                id: country[1],
                flag: country[2]
            }
                
        ])}
    }

    const post = async (input) => {
        await fetch('http://localhost:3001/activity', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        alert('ACTIVIDAD CREADA CON ÉXITO')
        reset()
    }

    function removeCountry(event,id) {
        event.preventDefault()
        const newCountries = countriesSelected.filter(country => country.id !== id);
            setCountriesSelected(newCountries);   
      }

    return (
        <div className={style.container}>
           <div id={style.caja}>
           <Link to={'/countries'}><button id={style.button}><span>BACK</span></button></Link>
           <form className={style.form} onSubmit={e => handlerSubmit(e)}>
                <div className={style.info}>
                <h2>ACTIVIDAD TURISTICA</h2>
                <div id={style.name}>
                    <p>Nombre</p><input className={errors.name} type="text" name="name" id="" value={input.name} onChange={e => handlerInputChange(e)} />
                    {errors && (<p className={style.error}>{errors}</p>)}
                </div>
                <div id={style.duracion}>
                    <p>Duración</p><input type="text" name="duracion" value={input.duracion} onChange={e => handlerInputChange(e)}/><span>Hs</span>
                </div>
                <div id={style.dificultad}>
                    <p>Dificultad</p>
                    <select id={style.dif} name='dificultad' value={input.dificultad} onChange={e => handlerInputChange(e)}>
                        <option>SELECT OPTION</option>  
                        <option value={1}>1 - Easy</option>
                        <option value={2}>2 - Normal</option>
                        <option value={3}>3 - Hard</option>
                        <option value={4}>4 - Very Hard</option>
                        <option value={5}>5 - Intense</option>
                    </select>
                </div>
                <div id={style.temporada}>
                    <p>Temporada</p>
                    <select name='temporada' onChange={e => handlerInputChange(e)} value={input.temporada}>
                        <option>SELECT OPTION</option>
                        <option value={'Verano'}>Verano</option>
                        <option value={'Otoño'}>Otoño</option>
                        <option value={'Invierno'}>Invierno</option>
                        <option value={'Primavera'}>Primavera</option>
                    </select>
                </div>
                </div>
                <div className={style.listCountries}>
                    <select name='country' id={style.select} value={countriesSelected} onChange={handlerCountries} >
                        <option id={style.op}>SELECT COUNTRY</option>
                        {countries?.map(country => (<option value={`${country.name} ${country.flag} ${country.id}`} key={country.id}>{country.name}</option>))}
                    </select>
                    <div id={style.countries}>
                        {countriesSelected?.map(country => (
                            <div className={style.country}>
                                <button onClick={(event) => removeCountry(event,country.id)}>X</button>
                                <img src={country.flag} alt="" width='40px'height='37px' />
                                <span>{country.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.con}>	
                <button className={style.btn}>
                    <span>Crear Actividad</span>
                </button>
                </div>
            </form>
           </div>
        </div>
    );
}

export default Actividad;
