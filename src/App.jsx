import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './Page/Accueil'
import Footer from './composant/footer/footer'
import Connection from "./Page/connection"
import Profile from './Page/profile'

function App() {

  return (
    <Router>
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
