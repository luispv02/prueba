import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Asistencia from '../components/Asistencia'
import Configuracion from '../components/Configuracion'
import Datos from '../components/Datos'
import Inicio from '../components/Inicio'
import Listado from '../components/Listado'
import Sidebar from '../components/Sidebar'

const AppRouter = () => {
  return (
    <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Inicio />}/>
              <Route path="/datos" element={<Datos />}/>
              <Route path="/listado" element={<Listado />}/>
              <Route path="/configuracion" element={<Configuracion />}/>
          </Routes>
          <Asistencia />
    </BrowserRouter>
  )
}

export default AppRouter