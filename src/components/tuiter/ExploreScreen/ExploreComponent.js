import React from 'react';
import { Link } from 'react-router-dom';
import PostSummaryList from '../PostSummaryList/index';

const ExploreComponent = () => {
  return (
    <>
      <div className="border-1">
        <div className="wd-search-panel">
                <span className="wd-search-icon wd-font-grey">
                    <i className="fas fa-search "></i>
                </span>
          <input className="wd-search-panel-input wd-rounded-corners-all-around wd-font-grey"
                 type="text"
                 placeholder="Search Twitter"/>
          <span className="wd-gear-icon wd-font-blue wd-font-size-20px">
                    <Link to="#" href="#"><i className="fas fa-cog"></i></Link>
                </span>
        </div>
        <div className="nav nav-tabs mb-2 justify-content-between">
          <div className="nav-item">
            <Link to="#" className="nav-link active" aria-current="page">For you</Link>
          </div>
          <div className="nav-item">
            <Link to="#" className="nav-link">Trending</Link>
          </div>
          <div className="nav-item">
            <Link to="#" className="nav-link">News</Link>
          </div>
          <div className="nav-item">
            <Link to="#" className="nav-link">Sports</Link>
          </div>
          <div className="nav-item d-none d-md-block">
            <Link to="#" className="nav-link">Entertainment</Link>
          </div>
        </div>

      </div>

      <div className="position-relative mb-2">
        <img className="img-fluid"
             src="/images/starship.webp"
             alt="spacex"
        />
        <div className="wd-picture-title fs-2 text-white">SpaceX's Starship</div>
      </div>
      <PostSummaryList/>
    </>
  );
};
export default ExploreComponent;