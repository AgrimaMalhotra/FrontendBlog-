import * as React from 'react';
import propTypes from 'prop-types';
import reaction from '../../assets/Icons/clapping.svg';
import heartBlack from '../../assets/Icons/heart-black.svg';
import heartRed from '../../assets/Icons/heart-red.svg';
import './Box.css';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { getFormattedDateFromUtcDate } from '../../utils/common';

function Box({ Data }) {
  const [isLiked, setIsLiked] = React.useState(Data.liked);
  const [clapCount, setClapCount] = React.useState(Data.claps);

  const handleLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(Data.id), {
        data: { liked: !isLiked },
      });
      setIsLiked(!isLiked);
    } catch (e) {
      return (
        <div className="backendError">
          <p>{e}</p>
        </div>
      );
    }
  };

  const handleClap = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(Data.id), {
        data: { claps: clapCount + 1 },
      });

      setClapCount(clapCount + 1);
    } catch (e) {
      return (
        <div className="backendError">
          <p>{e}</p>
        </div>
      );
    }
  };

  return (
    <div className="box" data-testid="blog-post">
      <div className="box-image">
        <img src={Data.image} alt="Blog Post Img" />
      </div>
      <div className="box-content">
        <div>
          <div className="date-duration">
            <p>{getFormattedDateFromUtcDate(Data.date)}</p>
            <p>{Data.reading_time} </p>
          </div>
          <div className="article-title">
            <p>{Data.title}</p>
          </div>
          <div className="article-description">
            <p>{Data.description}</p>
          </div>
        </div>
        <div className="like-bar">
          <hr />
          <div className="reaction">
            <div className="applause">
              <img
                src={reaction}
                alt="Clap"
                onClick={handleClap}
                onKeyDown={handleClap}
              />
              <p>{clapCount}</p>
            </div>
            <div className="liked" onClick={handleLike} onKeyDown={handleLike}>
              <img src={isLiked ? heartRed : heartBlack} alt="heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Box.propTypes = {
  Data: propTypes.shape({
    id: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    reading_time: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    claps: propTypes.number.isRequired,
    liked: propTypes.bool.isRequired,
    image: propTypes.string.isRequired,
  }).isRequired,
};

export default Box;
