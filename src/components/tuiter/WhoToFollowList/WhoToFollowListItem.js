import React from 'react';
import { Link } from 'react-router-dom';

const WhoToFollowListItem = ({who}) => {
  return (
    <div className="list-group-item d-flex align-items-center">
      <div className="col-2 d-flex align-items-center justify-content-center">
        <img className="wd-circle-icon"
             src={who.avatarIcon}
             alt={who.userName}
             width="50px" height="50px"/>
      </div>
      <div className="ms-2 col-7">
        <p className="wd-title wd-font-white wd-font-bold wd-font-size-15px wd-font-family-arial">
          <span className="">{who.userName}&nbsp;<i className="fas fa-check-circle"></i></span>
        </p>
        <p className="wd-title wd-font-black wd-font-size-15px wd-font-family-arial">
          @{who.handle}</p>
      </div>
      <Link to="#" className="btn wd-follow-btn rounded-pill ">Follow</Link>
    </div>
  );
};

export default WhoToFollowListItem;