import bars from '../assets/iconos/bars.svg'
import notificaciones from '../assets/iconos/notificaciones.svg'
import datos from '../assets/iconos/mis_datos.svg'
import inversiones from '../assets/iconos/inversiones.svg'
import movimientos from '../assets/iconos/movimientos.svg'
import oportunidades from '../assets/iconos/oportunidades.svg'
import configuracion from '../assets/iconos/configuracion-1.svg'
import asistencia from '../assets/iconos/asistencia.svg'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'


const Sidebar = () => {

  const [mostrarMenu, setMostrarMenu] = useState(false);

  const handleHidenMenu = () => {
    setMostrarMenu(!mostrarMenu);
  }

 

  return (
    <div className="sidebar">
      <div className="sidebar__content">
      <nav className={mostrarMenu ? "mostrar-menu position-fixed top-0 start-0 bottom-0 my-auto" : 'position-fixed top-0 start-0 bottom-0 my-auto'}>
        <ul>
            <li>
                <a href="#" className="bars d-flex aling-items-center text-decoration-none" onClick={handleHidenMenu}>
                    <img src={bars} />
                </a>
            </li>

            <li>
                <a href="#"  className="enlace-title d-flex aling-items-center text-decoration-none">
                    <img src={notificaciones} />
                    <span></span>
                    <div className="mb-3 info">
                      <p className="nombre mb-2">Bienvenido, <br/> Juan Carlos Moreno</p>
                      <p className="ultimo-acceso m-0">Ultimo acceso. 10 de Marzo del 2022 a las 11:45:59</p>
                    </div>
                </a>
            </li>
            <li>
                <NavLink to="datos" className="d-flex aling-items-center text-decoration-none">
                    <img src={datos} />
                    <span>Mis datos</span>
                </NavLink>
            </li>
            <li>
                <a href="#" className="d-flex aling-items-center text-decoration-none">
                    <img src={inversiones} />
                    <span>Mis inversiones</span>
                </a>
            </li>
            <li>
                <a href="#" className="d-flex aling-items-center text-decoration-none">
                <img src={movimientos} />
                    <span>Movimientos</span>
                </a>
            </li>
            <li>
                <NavLink to="listado" className="d-flex aling-items-center text-decoration-none">
                <img src={oportunidades} />
                    <span>Oportunidades</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="configuracion" className="d-flex aling-items-center text-decoration-none">
                  <img src={configuracion} />
                    <span>Configuracion</span>
                </NavLink>
            </li>
            <li>
                <a href="#" className="d-flex aling-items-center text-decoration-none">
                    {
                      mostrarMenu 
                      ? <span className="terminos mx-1 mt-3 text-center">PTI es una marca registrada <br /> Términos y Condiciones & Aviso de Privacidad</span>
                      :  <img src={asistencia} className="mt-1"/>
                    }                    
                </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar