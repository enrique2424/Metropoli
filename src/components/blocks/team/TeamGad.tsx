import { FC } from 'react';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { funciones } from 'data/about';


const TeamGad: FC = () => {
  return (
    <div className="row  align-items-center">
      <div className="col-md-8 col-lg-6 ">
        
        <figure className="rounded">
          <img src="/img/photos/vice-gobernador.jpg" srcSet="/img/photos/vice-gobernador@2x.jpg 2x" alt="" />
        </figure>
        <p className="mt-2 mb-0 fw-bold">Arq. Mario Aguilera Cirbian</p>
          <span className='fw-bold'>Autoridad Responsable de la Instancia Departamental de Asuntos Metropolitanos</span>
          {/* <p>Responsable de la Instancia Departamental de Asuntos Metropolitanos</p> */}
          
        
      </div>
      {/* <div className="col-md-4 col-lg-1 ">
      <object data="/img/svg/mapa.svg" type="image/svg+xml">
          <img src="/img/svg/mapa.svg" alt="SVG" />
        </object>
        </div> */}  
      <div className="col-lg-6">
        {/* <h2 className="fs-15 text-uppercase text-muted mb-3">Our Team</h2> */}
        <h3 className="display-5 mb-5">Instancia Departamental de Asuntos Metropolitanos</h3>
        <p className="mb-6">
          Es la responsable de llevar adelante los trabajos en general respecto a la Región Metropolitana de Santa Cruz,
          entre sus principales funciones se encuentra:
        </p>

        <ListColumn list={funciones} rowClass="gx-xl-8" />
        
      </div>
    </div>
  );
};

export default TeamGad;
