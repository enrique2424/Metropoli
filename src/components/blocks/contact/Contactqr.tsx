import { FC } from 'react';
import IconBox from 'components/reuseable/IconBox';
import Target from 'icons/lineal/Target';

const Contactqr: FC = () => {
  return (
    <section className="wrapper bg-light angled upper-end lower-end">
    <div className="container pt-8 pb-6 pt-md-1 pb-md-6">
      <div className="row gx-md-8 gx-xl-12 gy-10 align-items-stretch">
        <div className="col-lg-6 d-flex">
          <figure className="rounded m-auto">
            <img src="/img/photos/presentacion.jpg" alt="" className="w-100 h-100" />
          </figure>
        </div>
        
        <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 d-flex">
          <div className="card card-border-start border-primary w-100">
            <div className="card bg-soft-primary rounded d-flex align-items-center justify-content-center mb-6 mb-sm-0" style={{ minHeight: '100%' }}>
              Accede a la presentación del 
              <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 d-flex ">
              Arq. Mario Aguilera </div> <br />
                  <a href="https://drive.google.com/file/d/1GKQXFRCsJXhLJtlF62DyWJ0_5OPfiP_F/view" className="btn btn-primary btn-icon btn-icon-end rounded"target="_blank" rel="noopener noreferrer" download >
                  Descargar <i className="uil uil-arrow-right"></i>
                  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Contactqr;
