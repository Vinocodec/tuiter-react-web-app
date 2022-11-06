import { useDispatch } from 'react-redux';
import React from 'react';

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();

  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };

  return (
    <div className="col-12 d-flex pt-2 pe-5 justify-content-between">
      <div>
        <button className="btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <span className="wd-margin-right-12px">
                <i className="far fa-comment fa-flip-horizontal"></i>
              </span>{tuit.stats.comments}
        </button>
      </div>
      <div>
        <button className="btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <span className="wd-margin-right-12px">
                <i className="fas fa-retweet"></i>
              </span>
          {tuit.stats.retuits}
        </button>
      </div>
      <div>
        <button className="btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial"
                onClick={likeTuit}>
              <span className="wd-margin-right-12px">
                {tuit.liked
                  ? <i className="fas fa-heart" style={{color: 'red'}}></i>
                  : <i className="fas fa-heart"></i>
                }
              </span>
          {tuit.stats.likes}
        </button>
      </div>
      <div>
        <button className="btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <span className="wd-margin-right-12px">
                <i className="fas fa-external-link-alt"></i>
              </span>
        </button>
      </div>
    </div>
  );
};

export default TuitStats;