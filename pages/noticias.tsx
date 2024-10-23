import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Select from 'components/reuseable/Select';
import ShopService from 'components/common/ShopService';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import Pagination from 'components/reuseable/Pagination';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';

import { ProductCard } from 'components/reuseable/product-cards';
// -------- data -------- //
import products from 'data/product-list';
import { FooterGad } from 'components/blocks/footer';
import { noticiasAdapter } from 'adapters';
import { NewsCard } from 'components/reuseable/news-card';

interface NoticiasVirtualProps {
  noticias: [];

}
const Noticias: NextPage<NoticiasVirtualProps> = ({noticias}) => {

  const breadcrumb = [
    { id: 1, title: 'Inicio', url: '/' },
    { id: 2, title: 'Notícias', url: '/noticias' }
  ];

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar stickyBox={false} navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        {/* <section className="wrapper bg-gray">
          <div className="container py-12 py-md-16 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1 className="display-1 mb-3">Noticias </h1>
              </div>
            </div>
          </div>
        </section> */}

        {/* ========== products section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row align-items-center mb-10 position-relative zindex-1">
              <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
                <h2 className="display-6">Últimas noticias</h2>
                <Breadcrumb data={breadcrumb} className="mb-0" />
              </div>

              {/* <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                <Select options={options} />
              </div> */}
            </div>

            <div className="row gx-md-8 gy-10 gy-md-13 mb-13">
              {noticias.map((item: any) => (
                <NewsCard {...item} key={item.id} className="col-md-6 col-xl-4" />
              ))}
            </div>

            {/* ========== pagination section ========== */}
            {/* <Pagination /> */}
          </div>
        </section>

        {/* ========== service section ========== */}
        {/* <ShopService /> */}
      </main>

      {/* ========== footer section ========== */}
      <FooterGad />
    </Fragment>
  );
};

export default Noticias;

export async function getServerSideProps() {
  try {

    const headers = {
      'Content-Type': 'application/json'
    };
    console.log('API_URL', process.env.API_URL);

    const url = process.env.API_URL;
    const resp = await fetch(
      `${url}/api/news?` +
        new URLSearchParams({
          populate: 'images',
          'pagination[page]': '1',
          'pagination[pageSize]': '100',
          'sort': 'id:desc'
        }),
      {
        method: 'GET',
        headers
      }
    );
    const jsonData = await resp.json()
    const noticias = noticiasAdapter(jsonData);

    console.log('noticias', noticias);

    return {
      props: {
        noticias
      } // will be passed to the page component as props
    };
  } catch (error) {
    return { error };
  }
}
