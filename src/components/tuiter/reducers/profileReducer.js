import profile from '../data/profile.json';

const profileReducer = (state = profile, action) => {
  switch (action.type) {
    case 'EDIT_PROFILE_SUCCESS':
      return action.payload;
    default:
      return state;
  }

};

export default profileReducer;