import React from 'react'
import './index.css';
import Employees from './pages/Employees'
import Header from './components/Header'
import { Routes, BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header>

        <Routes>
          <Route path="/employees" element={< Employees />} />
        </Routes>
      </Header>
    </BrowserRouter>

  )
}

export default App;
