import * as React from 'react';
import './Main.css';
import Box from '../Box';
import makeRequest from '../../utils/makeRequest';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';

function Main() {
  const [blogData, setBlogData] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA)
      .then((data) => {
        setBlogData(data);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return (
      <div className='blogDataError'>
        <p>{error}</p>
      </div>
    );
  }

  return (
    // add blogdata loaded condition
    blogData?(<div className='box-wrapper'>
        {blogData.map((boxData,key) => (
          <Box key={key} Data={boxData} />
        ))}
      </div>):
      (
      <div className='loading'>
      <h2>Loading ..</h2>
      </div>
      )
  );
}
export default Main;
