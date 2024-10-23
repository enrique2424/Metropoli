import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { FooterGad } from 'components/blocks/footer';

import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { ContenedorCard } from 'components/ui';
import { bibliotecaAdapter } from 'adapters';
import { getDocumentos, getEstadisticas, getGad, getMarcoNormativo } from 'services';
// -------- data -------- //

// ==============================================================================
interface BibliotecaVirtualProps {
  marcoNormativo: [];
  documentos: [];
  gad: [];
  estadisticas: [];
}
// ==============================================================================
const BibliotecaVirtual: NextPage<BibliotecaVirtualProps> = ({ marcoNormativo, documentos, gad, estadisticas }) => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar />
      </header>

      <main className="content-wrapper">
        <section className="section">
          <div className="container-resposive">
            <input id="panel-1-ctrl" className="panel-radios" type="radio" name="tab-radios" defaultChecked={true} />
            <input id="panel-2-ctrl" className="panel-radios" type="radio" name="tab-radios" />
            <input id="panel-3-ctrl" className="panel-radios" type="radio" name="tab-radios" />
            <input id="panel-4-ctrl" className="panel-radios" type="radio" name="tab-radios" />
            <input id="nav-ctrl" className="panel-radios" type="checkbox" name="nav-checkbox" />

            <header id="introduction">
              <h1>Biblioteca Virtual</h1>
            </header>

            <ul id="tabs-list">
              <label id="open-nav-label" htmlFor="nav-ctrl"></label>
              <li id="li-for-panel-1">
                <label className="panel-label" htmlFor="panel-1-ctrl">
                  GAD Santa Cruz
                  
                </label>
              </li>
              <li id="li-for-panel-2">
                <label className="panel-label" htmlFor="panel-2-ctrl">
                  Documentos de interés
                </label>
              </li>
              <li id="li-for-panel-3">
                <label className="panel-label" htmlFor="panel-3-ctrl">
                Marco normativo
                </label>
              </li>
              <li id="li-for-panel-4">
                <label className="panel-label" htmlFor="panel-4-ctrl">
                  Estadística
                </label>
              </li>
              <label id="close-nav-label" htmlFor="nav-ctrl">
                Cerrar
              </label>
            </ul>

            <article id="panels">
              <div className="container">
                <section id="panel-1">
                  <main>
                    {/* <h1>GAD Santa Cruz</h1> */}
                    <ContenedorCard items={gad} />
                    
                  </main>
                </section>
                <section id="panel-2">
                  <main>
                    {/* <h1>Ciudades y Metrópoli</h1> */}
                    <ContenedorCard items={documentos}  />
                  </main>
                </section>
                <section id="panel-3">
                  <main>
                    {/* <h1>Leyes y decretos</h1> */}
                    
                    <ContenedorCard items={marcoNormativo} />
                  </main>
                </section>
                <section id="panel-4">
                  <main>
                    {/* <h1>Fichas estadisticas - INE</h1> */}
                    <ContenedorCard items={estadisticas} />
                  </main>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <FooterGad />
    </Fragment>
  );
};

export default BibliotecaVirtual;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const documentos = bibliotecaAdapter(getDocumentos());
  const marcoNormativo = bibliotecaAdapter(getMarcoNormativo());
  const gad = bibliotecaAdapter(getGad());
  const estadisticas = bibliotecaAdapter(getEstadisticas());
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      documentos,
      marcoNormativo,
      gad,
      estadisticas
    }
  };
}
