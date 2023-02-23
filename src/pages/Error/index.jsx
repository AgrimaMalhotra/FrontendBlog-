import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer } from '../../components';

function Error() {
  const { errorCode } = useParams();
  return (
    <>
      <Header />
      <div className="errorContainer">
        <h3>Something went wrong!</h3>
        {errorCode && <h5>{`Error code: ${errorCode}`}</h5>}
      </div>
      <Footer />
    </>
  );
}

export default Error;
