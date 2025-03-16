import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './pages/home/home.jsx'


function App() {

  return (
    <Router>
      
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
        </Routes>
        
    </Router>
  )
}

export default App
