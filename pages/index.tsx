import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { TeamGad } from 'components/blocks/team';
import { Hero15 } from 'components/blocks/hero';
import { AboutGad } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { FooterGad } from 'components/blocks/footer';
import { Contactqr, Mapa } from 'components/blocks/contact';
import PageProgress from 'components/common/PageProgress';
import { useEffect, useState } from 'react';
const Index: NextPage = () => {



  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://sczmetropoli.santacruz.gob.bo/api/counters/1')
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta completa de la API:", data);

        if (data && data.data && data.data.attributes) {
          const currentCount = data.data.attributes.visits;
          setCount(currentCount);

          const newCount = currentCount + 1;

          fetch(`https://sczmetropoli.santacruz.gob.bo/api/counters/${data.data.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data: { visits: newCount } })
})

          .then((res) => {
            if (!res.ok) {
              return res.json().then((errorData) => {
                console.error('Detalles del error:', errorData);
                throw new Error('La actualización del contador falló');
              });
            }
            return res.json();
          })
          .then((updatedData) => {
            if (updatedData && updatedData.data && updatedData.data.attributes) {
              setCount(updatedData.data.attributes.visits);
            }
          })
          .catch((error) => console.error('Error al actualizar el contador:', error));
        }
      })
      .catch((error) => console.error('Error al obtener el contador:', error));
  }, []);




  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          info={false}
          search={false}
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        
        {/* ========== banda verde temrporal para  ========== */}
        <Hero15 />
        
        {/* <div className="divLink mobileOnly ">     
    <div>
        <p>PROYECTO:</p>
        <p>FORTALECIMIENTO INSTITUCIONAL METROPOLITANO</p>
    </div>
    <div className="buttonContainer">
        <a href="https://www.concrevial.com/fim" target="_blank" rel="noopener noreferrer" className="botonTemporal btn btn-primary">INGRESE</a>
    </div>
</div> */}


          
        
        {/* ========== contact section ========== */}
        <Contactqr />
        <Mapa /> 

        <section className="wrapper bg-light angled lower-end">
          <div className="container py-14 py-md-16">
            {/* ========== about section ========== */}
            <AboutGad />

            

            {/* ========== process section ========== */}
            {/* <Process7 /> */}
          </div>
        </section>
        

        {/* ========== testimonial section ========== */}
        {/* <Testimonial5 /> */}

        {/* ========== team section ========== */}
        {/* <Team3 /> */}

        {/* ========== facts section ========== */}
        <Facts5 />

        {/* ========== contact section ========== */}
        {/* <Contact7 /> */}

        {/* ========== call to action section ========== */}
        {/* <CTA5 /> */}

        <div className="container">
          <div className="card shadow-none">
            <div className="card-body">
              {/* ========== team section ========== */}
              <TeamGad />
            </div>
          </div>
        </div>
        
      </main>

      {/* ========== footer section ========== */}
      <FooterGad />
    </Fragment>
  );
};

export default Index;
