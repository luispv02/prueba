import domicilio from '../assets/iconos/domicilio.svg';
import rentabilidad from '../assets/iconos/rentabilidad.svg';
import invertir from '../assets/iconos/invertir.svg';

import slider1 from '../assets/slider/slider1.jpg'
import slider2 from '../assets/slider/slider2.jpg'
import slider3 from '../assets/slider/slider3.jpg'
import slider4 from '../assets/slider/slider4.jpg'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Listado = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',

    Default: true
  };

  return (
    
      <div className="slider">
      <Slider {...settings}>
        <div className="card">
          <div className="card-top">
            <h2>Centro de Negocios BlueSky</h2>
            <p className="m-0"><img src={domicilio} width="20px"/>Monterrey. N.L</p>
          </div>
          
          <img src={slider1} className="card-img rounded" />

          <div className="barra-progreso">
            <div className="progress mt-2">
              <div className="progress-bar bg-danger" role="progressbar" style={{width:' 30%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span className="centro-negocios-barra-cantidad">3.2k</span>
          </div>

          <div className="card-body p-0">
            <h5 className="price">Min $10k - Max $13k</h5>

            <div className="rentabilidad-icono">
              <img src={rentabilidad}/>

              <div className="rentabilidad">
                <p className="m-0">Rentabilidad estimada</p>
                <p className="m-0">10.3% - 20.8%</p>
              </div>
            </div>
            
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit nisi, convallis eu euismod ac, pretium nec felis. Phasellus viverra orci massa. Quisque non ante et purus congue dapibus eget sed nisl...<a href="#">saber mas</a></p>
          </div>

          <div className="card-footer bg-transparent border-0 p-0">
            <button className="btn btn-primary w-100"><img src={invertir} width="35px"/>Invertir</button>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <h2>Central Park</h2>
            <p className="m-0"><img src={domicilio} width="20px"/>Queretaro. Qro.</p>
          </div>
          
          <img src={slider2} className="card-img rounded" />

          <div className="barra-progreso">
            <div className="progress mt-2">
              <div className="progress-bar bg-danger" role="progressbar" style={{width:'80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span className="central-park-barra-cantidad">17.2k</span>
          </div>

          <div className="card-body p-0">
            <h5 className="price">Min $22k - Max $26k</h5>

            <div className="rentabilidad-icono">
              <img src={rentabilidad}/>

              <div className="rentabilidad">
                <p className="m-0">Rentabilidad estimada</p>
                <p className="m-0">9.3% - 22.8%</p>
              </div>
            </div>
            
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit nisi, convallis eu euismod ac, pretium nec felis. Phasellus viverra orci massa. Quisque non ante et purus congue dapibus eget sed nisl...<a href="#">saber mas</a></p>
          </div>

          <div className="card-footer bg-transparent border-0 p-0">
            <button className="btn btn-primary w-100"><img src={invertir} width="35px"/>Invertir</button>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <h2>Las Bugambilias</h2>
            <p className="m-0"><img src={domicilio} width="20px"/>Cancun. Q.R.</p>
          </div>
          
          <img src={slider3} className="card-img rounded" />

          <div className="barra-progreso">
            <div className="progress mt-2">
              <div className="progress-bar bg-danger" role="progressbar" style={{width:' 40%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span className="bugambilias-barra-cantidad">23.2k</span>
          </div>

          <div className="card-body p-0">
            <h5 className="price">Min $50k - Max $63k</h5>

            <div className="rentabilidad-icono">
              <img src={rentabilidad}/>

              <div className="rentabilidad">
                <p className="m-0">Rentabilidad estimada</p>
                <p className="m-0">15.3% - 25.8%</p>
              </div>
            </div>
            
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit nisi, convallis eu euismod ac, pretium nec felis. Phasellus viverra orci massa. Quisque non ante et purus congue dapibus eget sed nisl...<a href="#">saber mas</a></p>
          </div>

          <div className="card-footer bg-transparent border-0 p-0">
            <button className="btn btn-primary w-100"><img src={invertir} width="35px"/>Invertir</button>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <h2>Lorem ipsum dolor</h2>
            <p className="m-0"><img src={domicilio} width="20px"/>Queretaro. Qro.</p>
          </div>
          
          <img src={slider4} className="card-img rounded" />

          <div className="barra-progreso">
            <div className="progress mt-2">
              <div className="progress-bar bg-danger" role="progressbar" style={{width:' 90%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span className="lorem-barra-cantidad">3.2k</span>
          </div>

          <div className="card-body p-0">
            <h5 className="price">Min $18k - Max $23k</h5>

            <div className="rentabilidad-icono">
              <img src={rentabilidad}/>

              <div className="rentabilidad">
                <p className="m-0">Rentabilidad estimada</p>
                <p className="m-0">17.3% - 24.8%</p>
              </div>
            </div>
            
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit nisi, convallis eu euismod ac, pretium nec felis. Phasellus viverra orci massa. Quisque non ante et purus congue dapibus eget sed nisl...<a href="#">saber mas</a></p>
          </div>

          <div className="card-footer bg-transparent border-0 p-0">
            <button className="btn btn-primary w-100"><img src={invertir} width="35px"/>Invertir</button>
          </div>
        </div>
        </Slider>
      </div>
        
    
  )
}

export default Listado