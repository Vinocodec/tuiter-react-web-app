import React from 'react';
import WhoToFollowListItem from './WhoToFollowListItem';
import who from './who.json';
import { Link } from 'react-router-dom';

const WhoToFollowList = () => {
  return (
    <div class="list-group wd-follow-panel wd-rounded-corners-all-around">
      <div class="list-group-item d-flex justify-content-between align-items-center">
        <Link to="#" class="fw-bold wd-font-white">Who to follow</Link>
      </div>
      {who.map(item => <WhoToFollowListItem who={item}/>)}
    </div>
  );
};
export default WhoToFollowList;