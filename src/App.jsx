import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './Page/Accueil'
import Footer from './composant/footer/footer'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
