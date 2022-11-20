// import React from 'react';
// import TuitListItem from './TuitListItem.js';
// import { useSelector } from 'react-redux';
//
// const TuitList = () => {
//
//   const tuits = useSelector(state => state.tuits);
//
//   return (
//     <>
//       {tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)}
//     </>
//   );
// };
//
// export default TuitList;

import { React, useEffect } from 'react';
import TuitListItem from './TuitListItem.js';
import { useDispatch, useSelector } from 'react-redux';
import { findAllTuits } from '../../actions/tuitsActions';

const TuitList = () => {

  const tuits = useSelector(state => state.tuits);

  const dispatch = useDispatch();

  useEffect(() => findAllTuits(dispatch), [dispatch]);

  return (
      <>
        {tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)}
      </>
  );
};

export default TuitList;