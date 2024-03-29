import {Route, Routes, useLocation} from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './redux/actions/actions'
import LandingPage from './component/landingPage/LandingPage'
import Home from './component/home/Home'
import Detail from './component/detail/Detail.jsx'
import Loading from './component/loading/Loading.jsx'
import Create from './component/create/Create.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import Footer from './component/Footer/Footer.jsx'
import Search from './component/search/Search.jsx'
import style from './App.module.css'

function App() {

  const location = useLocation()
  const dispatch = useDispatch()
  const breedLoader = useSelector(state=>state.loadedBreed)
  const temperamentLoader = useSelector(state => state.loadedTemperament)
  const searchLoader = useSelector(state=>state.loadedSearch)
  const detailLoader = useSelector(state=>state.loadedDetail)
  
    

    React.useEffect(()=>{
      if(!breedLoader){
      dispatch(actions.getDogs())}
    },[])
    
    React.useEffect(()=>{
      if(!temperamentLoader){
      dispatch(actions.getTemperaments())}
    },[])
  

  return (
    <div>
      {location.pathname !== '/' && (
        <Navbar/>
      )}
      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={breedLoader&&temperamentLoader?<Home/>:<Loading/>}/>
          <Route path='/create' element={<Create/>}/>          
          <Route path='/search' element={searchLoader?<Search/>:<Loading/>}/>
          <Route path='/detail/:id' element={detailLoader?<Detail/>:<Loading/>}/>
        </Routes>
      
      
        {location.pathname !== '/' && (
          <Footer/>
        )}
      
    </div> 
  )
}

export default App
