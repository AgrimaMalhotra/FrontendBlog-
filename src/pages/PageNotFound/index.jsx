import React from 'react';
import { Header, Footer } from '../../components';

function PageNotFound() {
  return (
    <>
      <Header />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
