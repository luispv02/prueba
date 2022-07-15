import notificaciones from '../assets/iconos/notificaciones-1.svg';
import password from '../assets/iconos/contraseña.svg';
import correo from '../assets/iconos/correo_electronico.svg';
import autenticacion from '../assets/iconos/autenticacion.svg';
import eliminarCuenta from '../assets/iconos/eliminacion_cuenta.svg';

const Configuracion = () => {
  return (
    <div >
      <div className="configuracion">
        <div className="row d-flex flex-column align-items-center buttons ">
            <div className="col-md-6 mb-3">
              <button className="btn  w-100">
                <img 
                  src={notificaciones}
                  width="25px"
                />
              Preferencia de notificaciones</button>
            </div>

            <div className="col-md-6 mb-3">
            <button className="btn  w-100">
                <img 
                  src={password}
                  width="25px"
                />
              Cambio de contraseña</button>
            </div>

            <div className="col-md-6 mb-3">
              <button className="btn  w-100">
                <img 
                  src={correo}
                  width="25px"
                />
                Cambio de correo electronico</button>
            </div>

            <div className="col-md-6 mb-3">
              <button className="btn  w-100">
                <img 
                  src={autenticacion}
                  width="25px"
                />
                Doble factor de autenticacion</button>
            </div>

            <div className="col-md-6 mb-3">
              <button className="btn  w-100">
                <img 
                  src={eliminarCuenta}
                  width="25px"
                />
                Eliminacion de la cuenta</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Configuracion