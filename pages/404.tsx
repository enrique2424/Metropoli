import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { FooterGad } from 'components/blocks/footer';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';

const NotFound: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          
        />
        
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-9 col-xl-8 mx-auto">
                <FigureImage width={800} height={316} src="/img/illustrations/404.png" className="mb-10" />
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Página no encontrada.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  La página que busca no está disponible o ha sido movida. Pruebe con una página diferente o vaya a
                  página de inicio con el botón de abajo.
                </p>

                <NextLink title="Ir a la página de inicio" href="/" className="btn btn-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <FooterGad />
    </Fragment>
  );
};

export default NotFound;
