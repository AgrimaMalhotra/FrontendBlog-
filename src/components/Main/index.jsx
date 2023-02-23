import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import Box from '../Box';
import makeRequest from '../../utils/makeRequest';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';

function Main() {
  const [blogData, setBlogData] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA, {}, navigate).then((data) => {
      setBlogData(data);
    });
  }, []);
  return (
    // add blogData loaded condition
    blogData ? (
      <div className="box-wrapper basic-padding">
        {blogData.map((eachBlogData) => (
          <Box key={eachBlogData.id} Data={eachBlogData} />
        ))}
      </div>
    ) : (
      <div className="loading">
        <h2>Loading ..</h2>
      </div>
    )
  );
}
export default Main;
