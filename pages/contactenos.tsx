import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { FooterGad } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
const breadcrumb = [
  { id: 1, title: 'Inicio', url: '/' },
  { id: 2, title: 'Contáctenos', url: '#' }
];

const Contact: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay-400 text-white"
          style={{ backgroundImage: 'url(/img/photos/bg-contact.jpg)' }}
        >
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-white">Contáctenos</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container pb-11">
            {/* ========== contact info section ========== */}
            <div className="row mb-14 mb-md-16">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          allowFullScreen
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.2029555752724!2d-63.18786412276271!3d-17.798057110499276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e815fffb2ab3%3A0x9c0540975b7448aa!2sGobierno%20Autonomo%20Departamental%20de%20Santa%20Cruz!5e0!3m2!1ses!2sbo!4v1672230116183!5m2!1ses!2sbo"
                          style={{ width: '100%', height: '100%', border: 0 }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-pink fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1">Dirección</h5>
                            <address>
                            Edificio central – Gobierno Autónomo Departamental de Santa Cruz, <br className="d-none d-md-block" />
                            Despacho del Vicegobernador, Av. Omar Chávez, esquina Calle Pozo
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-pink fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">Teléfono</h5>
                            <p>
                                3636189 <br />
                       
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-pink fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">E-mail</h5>
                            <p className="mb-0">
                              <a href="mailto:sczmetropoli.santacruz.gob.bo" className="link-body">
                               sczmetropoli.santacruz.gob.bo
                              </a>
                            </p>
                            {/* <p className="mb-0">
                              <a href="mailto:help@sandbox.com" className="link-body">
                                help@sandbox.com
                              </a>
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            {/* <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div> */}
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <FooterGad />
    </Fragment>
  );
};

export default Contact;
