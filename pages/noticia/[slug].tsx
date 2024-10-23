import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import Plyr from 'plyr-react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { FooterGad } from 'components/blocks/footer';
import { ParsedUrlQuery } from 'querystring';
import { noticiaAdapter, noticiasAdapter } from 'adapters';
// -------- hook -------- //
import useProgressbar from 'hooks/useProgressbar';
import { News } from 'components/reuseable/news';

interface NoticiaVirtualProps {
  noticia: any;
}
const Noticia: NextPage<NoticiaVirtualProps> = ({ noticia }) => {
  useProgressbar();
  if (!noticia) {
    return <div>...</div>;
  }

  const { title, content, description, images, linkVideo, publishDate } = noticia;
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <News
                linkVideo=""
                description={description}
                title={title}
                publishDate={publishDate}
                content={content}
                cardTop={
                  <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                  <div className="col-lg-12">
                    <figure>
                      <img
                        alt="choose us"
                        className="w-auto"
                        src={images[0]} srcSet={images[0]} 
                      />
                    </figure>
                  </div>

                </div>
                  // <div className="post-slider card-img-top">
                  //   <Carousel grabCursor spaceBetween={5} slidesPerView={1} className="dots-over">
                  //     {images.map((url: any, index: number) => {
                  //       return (
                  //         <div key={index}>
                  //           <Image src={url} alt={url} width={750} height={500} />
                  //         </div>
                  //       );
                  //     })}ya
                
                  //   </Carousel>
                  // </div>
                }
              ></News>

              <div className='mt-5'>
                {linkVideo ? (
                  <div>
                    {' '}
                    <Plyr
                      options={{ loadSprite: true, clickToPlay: true }}
                      source={{ type: 'video', sources: [{ src: linkVideo, provider: 'youtube' }] }}
                    />
                  </div>
                ) : (
                  <></>
                )}
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

export default Noticia;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const url = process.env.API_URL;
    const URLIMG = process.env.API_URLIMG;
    const resp = await fetch(`${url}/api/news?` /* ... */, { method: 'GET', headers: { 'Content-Type': 'application/json' } });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('Error response text:', text);
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const contentType = resp.headers.get('content-type');
    if (!contentType || contentType.indexOf('application/json') === -1) {
      const text = await resp.text();
      console.error('No-JSON response:', text);
      throw new Error('Server did not return JSON!');
    }

    const jsonData = await resp.json();
    const noticias = noticiasAdapter(jsonData);

    const paths = noticias.map((noticia: any) => ({ params: { slug: noticia.slug } }));
    return { paths, fallback: true };
  } catch (error) {
    console.error('Error getting static paths:', error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug } = context.params as IParams;
    const url = process.env.API_URL;
    const URLIMG = process.env.API_URLIMG;
    const resp = await fetch(`${url}/api/news/${slug}/?populate=images` /* ... */, { method: 'GET', headers: { 'Content-Type': 'application/json' } });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('Error response text:', text);
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const contentType = resp.headers.get('content-type');
    if (!contentType || contentType.indexOf('application/json') === -1) {
      const text = await resp.text();
      console.error('No-JSON response:', text);
      throw new Error('Server did not return JSON!');
    }

    const jsonData = await resp.json();
    const noticia = noticiaAdapter(jsonData);

    return { props: { noticia } };
  } catch (error) {
    console.error('Error getting static props:', error);
    return { notFound: true };
  }
};

