import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './Page/Accueil'
import Footer from './composant/footer/footer'
import Header from './composant/header/header'
import Connection from "./Page/connection"
import Profile from './Page/profile/profile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { infosUser, logout ,setToken} from './features/user/userslice'

function App() {
  const Dispatch = useDispatch()
  const storageToken = localStorage.getItem("token") || sessionStorage.getItem("token")
  function isTokenValid(token){
    if(!token) return false

    try{
    const exp = JSON.parse(atob(token.split(".")[1])).exp
    console.log(exp)
    const now = Math.floor(Date.now() /1000)
    console.log(now)
    return exp > now
    }catch (error)
    {
      console.log(error)
      return false
    }
  }
  useEffect(() => {
    if(isTokenValid(storageToken)){
      console.log("token valide")
      Dispatch(setToken(storageToken))
      Dispatch(infosUser())
    }
    else{
      console.log("token invalid")
      Dispatch(logout())
    }
  },[])


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/connection' element={<Connection/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
