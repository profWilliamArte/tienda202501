
import  { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
const Hero = () => {
    useEffect(() => {
        // Inicializa Tiny Slider cuando el componente se monta
        const slider = tns({
          container: ".hero-slider", // Selector del contenedor del slider
          items: 1, // Un solo elemento visible a la vez
          slideBy: "page", // Desplazamiento por página
          autoplay: true, // Reproducción automática
          autoplayButtonOutput: false, // Ocultar botón de reproducción automática
          controls: true, // Flechas de navegación
          nav: false, // Puntos de navegación
          speed: 500, // Velocidad de transición
          responsive: {
            640: {
              items: 1, // Mantener un solo elemento en pantallas pequeñas
            },
            768: {
              items: 1, // Mantener un solo elemento en pantallas medianas
            },
            1024: {
              items: 1, // Mantener un solo elemento en pantallas grandes
            },
          },
        });
    
        // Limpia el slider cuando el componente se desmonta
        return () => {
          if (slider) {
            slider.destroy();
          }
        };
      }, []);
    return (
<section className="hero-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-12 custom-padding-right">
        <div className="slider-head">
       
          <div className="hero-slider">
          
            <div className="single-slider" style={{backgroundImage: 'url(assets/images/hero/slider-bg1.jpg)'}}>
              <div className="content">
                <h2><span>No restocking fee ($35 savings)</span>
                  M75 Sport Watch
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                <h3><span>Now Only</span> $320.99</h3>
                <div className="button">
                  <a href="product-grids.html" className="btn">Shop Now</a>
                </div>
              </div>
            </div>
           
            <div className="single-slider" style={{backgroundImage: 'url(assets/images/hero/slider-bg2.jpg)'}}>
              <div className="content">
                <h2><span>Big Sale Offer</span>
                  Get the Best Deal on CCTV Camera
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                <h3><span>Combo Only:</span> $590.00</h3>
                <div className="button">
                  <a href="product-grids.html" className="btn">Shop Now</a>
                </div>
              </div>
            </div>
           
          </div>
       
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
            {/* Start Small Banner */}
            <div className="hero-small-banner" style={{backgroundImage: 'url("assets/images/hero/slider-bnr.jpg")'}}>
              <div className="content">
                <h2>
                  <span>New line required</span>
                  iPhone 12 Pro Max
                </h2>
                <h3>$259.99</h3>
              </div>
            </div>
            {/* End Small Banner */}
          </div>
          <div className="col-lg-12 col-md-6 col-12">
            {/* Start Small Banner */}
            <div className="hero-small-banner style2">
              <div className="content">
                <h2>Weekly Sale!</h2>
                <p>Saving up to 50% off all online store items this week.</p>
                <div className="button">
                  <a className="btn" href="product-grids.html">Shop Now</a>
                </div>
              </div>
            </div>
            {/* Start Small Banner */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}

export default Hero