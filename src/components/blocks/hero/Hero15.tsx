import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
import NextLink from 'components/reuseable/links/NextLink';

const Hero15: FC = () => {
  // use video popup
  useLightBox();

  return (
    <div className="wrapper bg-dark">
      <Carousel
        slidesPerView={1}
        className="swiper-hero dots-over"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
      >

<div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/ciudad_luminosa_01.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                SANTA CRUZ METRÓPOLI
                </h2>

                {/* <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                genera más de $ 9.791 millones al año.
                </p> */}

              </div>
            </div>
          </div>
        </div>
        
        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/puente_atardecer_02.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                Más de 4 millones de habitantes
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                vivirán en la Región Metropolitana de Santa Cruz para el año 2030.

                </p>

               
              </div>
            </div>
          </div>
        </div>



        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/bg-3.jpg")' }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                La metropolización
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                Dinamiza la economía cruceña mediante la planificación e inversión que trasciende a los municipios locales.
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero15;
