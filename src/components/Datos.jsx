import datos from "../assets/iconos/mis_datos-1.svg";
import nombre from "../assets/iconos/nombre_apellido.svg";
import apellido from "../assets/iconos/nombre_apellido.svg";
import calendario from "../assets/iconos/calendario.svg";
import edad from "../assets/iconos/edad.svg";
import genero from "../assets/iconos/genero.svg";
import domicilio from "../assets/iconos/domicilio.svg";
import telefonoFijo from "../assets/iconos/telefono_fijo.svg";
import telefonoMovil from "../assets/iconos/telefono_movil.svg";
import rfcCurp from "../assets/iconos/rfc_curp.svg";
import actividadEconomica from "../assets/iconos/actividad_economica.svg";
import documentosIdentificacion from "../assets/iconos/documentos_identificacion.svg";
import contrato from "../assets/iconos/contrato.svg";
import cuentaBancaria from "../assets/iconos/cuenta_bancaria.svg";
import beneficiarios from "../assets/iconos/beneficiarios.svg";
import { useEffect, useState } from "react";

const Datos = () => {

  const [usuario, setUsuario]  = useState({});

  useEffect(() => {
    obtenerDatos();
  }, [])

  const obtenerDatos = async() => {
    const url = 'https://random-data-api.com/api/users/random_user?size=1';
    
    const resp = await fetch(url);
    const resultado = await resp.json();
  
    setUsuario(resultado[0]);
  }

  const {first_name, last_name, date_of_birth, gender, address, phone_number, id, uid, employment } = usuario;
  const year = new Date().getFullYear();
  const date = year - date_of_birth?.substr(0,4);

  return (
    <>
      <div className="datos p-4">
        <div className="title">
          <h2 className="d-flex align-items-center"><img src={datos} className="mx-1" width="25px"/>Datos Generales</h2>
        </div>

        <form className="row g-3 px-4 py-2">
          <div className="col-md-6 nombre">
            <input type="text" defaultValue={first_name } placeholder="Nombre (s)" className="form-control"/>
            <img 
              src={nombre}
            />
          </div>
          <div className="col-md-6">
            <input type="text" defaultValue={last_name} placeholder="Apellidos" className="form-control"/>
            <img 
              className="apellido"
              src={apellido}
            />
          </div>
          <div className="col-md-3">
            <input type="date" defaultValue={date_of_birth} className="form-control" />
            <span className="check"></span>
            <img 
              src={calendario}
            />
          </div>

          <div className="col-md-2">
            <input type="number" defaultValue={date || ''}  className="form-control" placeholder="Edad" />
            <img 
              src={edad}
            />
          </div>

          <div className="col-md-2">
            <input type="text" defaultValue={gender} className="form-control" placeholder="Genero" />
            <img 
              src={genero}
            />
          </div>

          <div className="col-md-5">
            <p className="m-0 nacionalidad">Nacionalidad</p>
          
            <input 
              type="radio"
              value="mexicana"
              name="nacionalidad"
            /><span>Mexicana</span>

            <input 
              type="radio"
              value="extranjera"
              name="nacionalidad"
            /><span>Extranjera</span>
          </div>

          <div className="col-md-12">
            <input type="text" defaultValue={address?.street_address} className="form-control" placeholder="Domicilio" /><img 
              src={domicilio}
            />
          </div>
          <div className="col-md-6">
            <input type="text" defaultValue={phone_number} className="form-control" placeholder="Telefono Movil"/><img 
              src={telefonoMovil}
            />
          </div>
          <div className="col-md-6">
            <input type="text" defaultValue={phone_number} className="form-control" placeholder="Telefono Fijo"/><img 
              src={telefonoFijo}
            />
          </div>

          <div className="col-md-6">
            <input type="text" defaultValue={id} className="form-control" placeholder="RFC"/><img 
              src={rfcCurp}
            />
          </div>
          <div className="col-md-6">
            <input type="text" defaultValue={uid} className="form-control" placeholder="CURP"/><img 
              src={rfcCurp}
            />
          </div>

          <div className="col-md-12">
            <input type="text" defaultValue={employment?.title} className="form-control" placeholder="Actividad Economica"/><img 
              src={actividadEconomica}
            />
          </div>
          
          <div className="col-md-12">
            <input type="submit" className="btn btn-primary w-100" value="Guardar Cambios"/>
          </div>
        </form>
      </div>

      <div className="row buttons mt-4">
        <div className="col-md-6 mt-2 button">
          <button className="btn  w-100">Documentos de Identificacion</button>
          <img 
            src={documentosIdentificacion}
          />
        </div>

        <div className="col-md-6 mt-2 button">
          <button className="btn w-100">Contrato</button>
          <img 
            src={contrato}
          />
        </div>

        <div className="col-md-6 mt-2 button">
          <button className="btn  w-100">Cuenta Bancaria</button>
          <img 
            src={cuentaBancaria}
          />
        </div>

        <div className="col-md-6 mt-2 button">
          <button className="btn w-100">Beneficiarios</button>
          <img 
            src={beneficiarios}
          />
        </div>
      </div>
    </>
  );
};

export default Datos;
