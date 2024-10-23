import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { FooterGad } from 'components/blocks/footer';

import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //


const EducacionMetropolitana: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
        />
      </header>

      <main className="content-wrapper">
     
      </main>

      {/* ========== footer section ========== */}
      <FooterGad />
    </Fragment>
  );
};

export default EducacionMetropolitana;
