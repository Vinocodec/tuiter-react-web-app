// import tuits from '../data/tuits.json';
//
// const tuitsReducer = (state = tuits, action) => {
//   switch (action.type) {
//     case 'create-tuit':
//       const newTuit = {
//         tuit: action.tuit,
//         _id: (new Date()).getTime() + '',
//         logo_image: '/images/avatar.PNG',
//         postedBy: {
//           'username': 'Wei Cai'
//         },
//         stats: {
//           comments: 17,
//           retuits: 19,
//           likes: 233,
//           replies: 32
//         }
//       };
//       return [
//         newTuit,
//         ...state,
//       ];
//     case 'delete-tuit':
//       return state.filter(
//         tuit => tuit._id !== action.tuit._id);
//     case 'like-tuit':
//       return state.map(tuit => {
//         if (tuit._id === action.tuit._id) {
//           if (tuit.liked === true) {
//             tuit.liked = false;
//             tuit.stats.likes--;
//           } else {
//             tuit.liked = true;
//             tuit.stats.likes++;
//           }
//           return tuit;
//         } else {
//           return tuit;
//         }
//       });
//
//
//     default:
//       return tuits;
//   }
// };
//
// export default tuitsReducer;

import { FIND_ALL_TUITS, CREATE_TUIT, DELETE_TUIT, UPDATE_TUIT } from '../../actions/tuitsActions';

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TUIT:
      return [
        action.newTuit,
        ...state,
      ];
    case FIND_ALL_TUITS:
      return action.tuits;
    case UPDATE_TUIT:
      return state.map(
          tuit => tuit._id === action.tuit._id ?
              action.tuit : tuit);
    case DELETE_TUIT:
      return state.filter(
          tuit => tuit._id !== action.tuit._id);
    default:
      return state;
  }
};

export default tuitsReducer;