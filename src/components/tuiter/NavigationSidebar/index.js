import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSidebar = ({active = 'explore'}) => {
  return (
    <div className="rounded list-group">
      <Link to="/" className="list-group-item list-group-item-action">
        <span className="me-3"><i className="fa-brands fa-twitter"></i></span>
      </Link>
      <Link to="/tuiter/home"
            className={`d-flex list-group-item list-group-item-action ${active === 'Home' ? 'active' : ''}`}>
        <span className="me-3"><i className="fas fa-solid fa-house-chimney"></i></span>
        <span className="d-none d-xl-block">Home</span>
      </Link>
      <Link to="/tuiter/explore"
            className={`d-flex list-group-item list-group-item-action ${active === 'Explore' ? 'active' : ''}`}>
        <span className="me-3"><i className="fa-solid fa-hashtag"></i></span>
        <span className="d-none d-xl-block">Explore</span>
      </Link>
      <Link to="#" className="d-flex list-group-item list-group-item-action">
        <span className="me-3"><i className="fa-solid fa-bell"></i></span>
        <span className="d-none d-xl-block">Notifications</span>
      </Link>
      <Link to="#" className="d-flex list-group-item list-group-item-action">
        <span className="me-3"><i className="fa-solid fa-envelope"></i></span>
        <span className="d-none d-xl-block">Messages</span>
      </Link>
      <Link to="#" className="d-flex list-group-item list-group-item-action">
        <span className="me-3"><i className="fa-solid fa-bookmark"></i></span>
        <span className="d-none d-xl-block">Boodmarks</span>
      </Link>
      <Link to="#" className="d-flex list-group-item list-group-item-action">
        <span className="me-3"><i className="fa-solid fa-list"></i></span>
        <span className="d-flex d-none d-xl-block">Lists</span>
      </Link>
      <Link to="#" className="d-flex  list-group-item list-group-item-action">
        <span className="me-3"><i className="fa-solid fa-user"></i></span>
        <span className="d-none d-xl-block">Profile</span>
      </Link>
      <Link to="#" className="d-flex list-group-item list-group-item-action">
            <span className="me-3 fa-stack">
                <i className="fa-regular fa-circle fa-stack-1x"></i>
                <i className="fa-solid fa-ellipsis fa-stack-1x"></i>
            </span>
        <span className="d-none d-xl-block">More</span>
      </Link>
      <div className="btn btn-primary mt-2 rounded-pill" href="#" role="button">
        <span className="d-block d-xl-none wd-font-size-12px">Tweet</span>
        <span className="d-none d-xl-block">Tweet</span>
      </div>
    </div>
  );
};
export default NavigationSidebar;
