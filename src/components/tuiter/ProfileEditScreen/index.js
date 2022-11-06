import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const ProfileEditScreen = () => {
    const old_profile = useSelector(state => state.profile);
    let [profile, setProfile] = useState(old_profile);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const inputChangeHandler = (event) => {
      const input_id = event.target.id;
      const value = event.target.value || '';
      let new_profile = profile;
      switch (input_id) {
        case 'username':
          new_profile = {...profile, username: value};
          break;
        case 'bio':
          new_profile = {...profile, bio: value};
          break;
        case 'location':
          new_profile = {...profile, location: value};
          break;
        case 'website':
          new_profile = {...profile, website: value};
          break;
        case 'dateOfBirth':
          new_profile = {...profile, dateOfBirth: value};
          break;
        default:
          break;
      }
      setProfile(new_profile);
    };

    const saveProfile = () => {
      dispatch({
        type: 'EDIT_PROFILE_SUCCESS',
        payload: profile
      });
      navigate('/tuiter/profile');
    };


    return (
      <>
        <div className="row">
          <Link to="/tuiter/profile" className="col-1 btn py-3 text-center">
            <i className="fa-solid fa-xmark"></i>
          </Link>
          <span className="col">
        <h4 className="py-2">Edit profile</h4>
        </span>
          <div className="col-4 col-sm-3 col-md-2 py-2">
            <button
              className="btn btn-outline-dark rounded-pill wd-font-white"
              onClick={saveProfile}
            >
              Save
            </button>
          </div>
        </div>
        <div className="col-12 position-relative wd-profile-edit-banner-div">
          <img className="my-1 wd-profile-edit-banner"
               src={profile.bannerPicture}
               alt="bannerPicture"
          />
          <i className="btn fa-solid fa-camera wd-profile-edit-banner-update"></i>
          <div className="col-9 wd-profile-circle-icon-div">
            <img className="wd-profile-edit-circle-icon img-fluid"
                 src={profile.profilePicture}
                 alt="profilePicture"
            />
            <i className="btn fa-solid fa-camera wd-profile-edit-icon-update"></i>
          </div>

        </div>
        <form>
          <div className="form-group my-2">
            <label htmlFor="username" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Name"
              value={profile.username}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="bio" className="form-label">Bio</label>
            <textarea
              className="form-control"
              id="bio"
              placeholder="Bio"
              value={profile.bio}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Location"
              value={profile.location}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="website" className="form-label">Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              placeholder="Website"
              value={profile.website}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="dateOfBirth" className="form-label">Date of birth</label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              placeholder="Date of birth"
              value={profile.dateOfBirth}
              onChange={inputChangeHandler}
            />
          </div>
        </form>
      </>
    );
  }
;

export default ProfileEditScreen;