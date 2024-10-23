import { FC } from 'react';
// ...otros imports omitidos por brevedad

const Mapa: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          
          {/* Columna del título */}
          <div className="col-lg-6">
            <h2 className="display-4 mb-8">Mapa</h2>
            <h2 className="display-4 mb-8">Región Metropolitana</h2>
          </div>
          
          {/* Columna de la imagen */}
          <div className="col-lg-6 position-relative">
            <figure className="rounded">
              <img
                src="/img/svg/mapaOficial.svg"
                srcSet="/img/svg/mapaOficial.svg 2x"
                alt="SVG"
                className="mapa-svg"
              />
            </figure>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Mapa;
