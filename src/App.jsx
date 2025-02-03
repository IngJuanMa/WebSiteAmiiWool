import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Personalizacion from './Pages/Personalizacion/Personalizacion'
import Productos from './Pages/Productos/Productos'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/Productos' element={<Productos/>} />
        <Route path='/Personalizacion' element={<Personalizacion/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
