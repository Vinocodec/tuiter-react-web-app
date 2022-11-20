import React from 'react';
import SummaryPicture from './SummaryPicture';
import { useDispatch } from 'react-redux';
import TuitStats from './TuitStats';
import { deleteTuit } from '../../actions/tuitsActions';

const TuitListItem = ({tuit}) => {

  const dispatch = useDispatch();

  return (
      <>
        <div className="rounded wd-background-grey row m-0 ps-2 pe-2 pt-2 pb-2">
          <div className="col-1 justify-content-center">
            <img className="wd-circle-icon" src={tuit.logo_image} alt={tuit.postedBy.username}/>
          </div>

          <div className="col-11 row ms-2">
            {/*text post*/}
            <div className="col-11 mb-2">
              <p className="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
            <span className="wd-font-white wd-font-bold">{tuit.postedBy.username}&nbsp;
              <i className="fas fa-check-circle"></i>
            </span>&nbsp;@{tuit.handle}&nbsp;•&nbsp;{tuit.time}
              </p>
              <p className="wd-title wd-font-white wd-font-size-15px wd-font-family-arial"
                 dangerouslySetInnerHTML={{__html: tuit.tuit}}/>
            </div>
            <div className="col-1">
              <button className="btn btn-sm wd-font-white">
                <i onClick={() => deleteTuit(dispatch, tuit)}
                   className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/*summary picture and text*/}
            <SummaryPicture post={tuit}/>

            {/*tuit status*/}
            <TuitStats tuit={tuit}/>
          </div>
        </div>
      </>
  );
};

export default TuitListItem;