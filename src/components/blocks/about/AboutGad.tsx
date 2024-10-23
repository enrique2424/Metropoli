import { FC } from 'react';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList2, aboutList5 } from 'data/about';
import Megafono from 'icons/lineal/Megafono';

const AboutGad: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6">
        <Megafono className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">Santa Cruz Metrópoli: epicentro sudamericano de oportunidades.</h2>

        <p className="mb-3">
        Con más de 3 millones habitantes, alberga a más del 75% de la población departamental y más del 24% de la población nacional.

        </p>

        <p className="mb-6">
        Es el responsable del 22% del PIB Nacional y más del 80% del PIB Departamental, con una cifra cercana a 10.000 millones (USD). Santa Cruz Metrópoli es una región que demanda anualmente más de 121.000 millones de litros de agua para su población y genera más de 800.000 Tn. de residuos sólidos al año con un gran potencial de aprovechamiento e industrialización; Entre sus municipios transitan más de 600 mil personas y más de 170.000 vehículos diariamente, además se encuentra ubicada latitudinal y longitudinalmente en el centro de Sudamérica.


        </p>

        <h4 className="mb-3">Municipios que conforman la Región Metropolitana de Santa Cruz </h4>

        <ListColumn rowClass="gx-xl-8" list={aboutList2} /> <br />
        <h4 className="mb-3">Áreas de influencia:</h4>
        <ListColumn rowClass="gx-xl-8" list={aboutList5} />
      </div>
    </div>
  );
};

export default AboutGad;
