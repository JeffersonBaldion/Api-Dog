import Cards from "../cards/Cards"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/actions'
import style from './Home.module.css'


export default function Home(){

    const dispatch = useDispatch()
    const selector = useSelector(state => state.razas)
    const temperamento = useSelector(state=>state.temperaments)
    const [filter, setFilter] = React.useState({
        origen: "All",
        temperamento:"All",
        orden:"Any",
    })


    React.useEffect(()=>{
        dispatch(actions.cleanDetail())
    },[])

    React.useEffect(()=>{
        dispatch(actions.filterDogs(filter))
    },[filter])
    
    function handleChange(e){
        const {name, value} = e.target
        setFilter({
            ...filter,[name]:value
        })
    }

    
    
    return (
        <div className={style.Home}>
            <div className={style.formContainer}>
                <select name="origen" onChange={handleChange}>
                    <option selected disabled>ORIGIN</option>
                    <option>All</option>
                    <option>Api</option>
                    <option>Base de datos</option>
                </select>
                <select name='temperamento' onChange={handleChange}>
                    <option selected disabled>TEMPERAMENTS</option>
                    <option>All</option>
                    {temperamento.map((ele, index)=>{return <option key={index}>{ele.Nombre}</option>})}
                </select>
                <select name='orden' onChange={handleChange}>
                    <option selected disabled>ORDER</option>
                    <option>Any</option>
                    <option>Ascendente</option>
                    <option>Descendente</option>
                </select>
                
                
            </div>
            <Cards dog={selector}></Cards>
            
        </div>
    )
}