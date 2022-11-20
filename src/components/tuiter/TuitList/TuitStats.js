import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTuit } from '../../services/tuits-thunks';

const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();

    const likeTuit = () => {
        if (tuit.liked) {
            updateTuit(dispatch, {
                ...tuit,
                liked: !tuit.liked,
                stats: {...tuit.stats, likes: Number(tuit.stats.likes) - 1}
            });
        } else {
            updateTuit(dispatch, {
                ...tuit,
                liked: !tuit.liked,
                stats: {...tuit.stats, likes: Number(tuit.stats.likes) + 1}
            });
        }
    };

    const dislikeTuit = () => {
        if (tuit.disliked) {
            updateTuit(dispatch, {
                ...tuit,
                disliked: !tuit.disliked,
                stats: {...tuit.stats, dislikes: Number(tuit.stats.dislikes) - 1}
            });
        } else {
            updateTuit(dispatch, {
                ...tuit,
                disliked: !tuit.disliked,
                stats: {...tuit.stats, dislikes: Number(tuit.stats.dislikes) + 1}
            });
        }
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
                    ? <i className="fa-solid fa-thumbs-up" style={{color: 'green'}}></i>
                    : <i className="fa-solid fa-thumbs-up"></i>
                }
              </span>
                    {tuit.stats.likes}
                </button>
            </div>
            <div>
                <button className="btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial"
                        onClick={dislikeTuit}>
              <span className="wd-margin-right-12px">
                {tuit.disliked
                    ? <i className="fa-solid fa-thumbs-down" style={{color: 'red'}}></i>
                    : <i className="fa-solid fa-thumbs-down"></i>
                }
              </span>
                    {tuit.stats.dislikes}
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