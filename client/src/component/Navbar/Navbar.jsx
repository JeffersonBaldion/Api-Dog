import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import * as actions from '../../redux/actions/actions'


export default function Navbar (){
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [toSearch, setToSearch] = React.useState({
        name: ''
    })

    function handleChange(e){
        setToSearch({
            name : e.target.value
        })
    }

    function handleSearch(e){
        e.preventDefault()
        dispatch(actions.getSearch(toSearch.name))
        setToSearch({
            name: ''
        })
        navigate('/search')
    }
        
    return (
        <div className={style.navBar}>
            <Link to='/' className={style.logo}>
                <h1 >DOGGY WORLD</h1>
            </Link>
            <div className={style.menuContainer}>
                <Link to='/home'><h3>Home</h3></Link>
                <Link to='/create'><h3>Create</h3></Link>
                <form className={style.form} onSubmit={handleSearch}>
                    <input value={toSearch.name} onChange={handleChange} type='search' placeholder="Type a dog's breed"></input>
                    <button type='submit'><ion-icon name="search-outline"></ion-icon></button>
                </form>
            </div>
        </div>
    )
}