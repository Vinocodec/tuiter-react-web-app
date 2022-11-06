import React from 'react';
import WhoToFollowListItem from './WhoToFollowListItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WhoToFollowList = () => {

  const who = useSelector(state => state.who);

  return (
    <div className="list-group wd-follow-panel wd-rounded-corners-all-around">
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <Link to="#" className="fw-bold wd-font-white">Who to follow</Link>
      </div>
      {who.map(item => <WhoToFollowListItem who={item} key={item._id}/>)}
    </div>
  );
};
export default WhoToFollowList;