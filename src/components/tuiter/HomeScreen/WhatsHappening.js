import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTuit } from '../../services/tuits-thunks';

const WhatsHappening = () => {
    let [newTuit, setNewTuit] = useState({tuit: ''});

    const dispatch = useDispatch();

    return (
        <>
            <div className="row mb-2">
                <div className="col-1 justify-content-center">
                    <img className="wd-circle-icon" src="/images/avatar.PNG" alt="user-icon"/>
                </div>
                <div className="col-11 ps-3">
        <textarea className="form-control border-1 bg-black wd-font-white wd-whatshappening-textarea"
                  value={newTuit.tuit}
                  placeholder="What's happening?"
                  onChange={(event) => setNewTuit({...newTuit, tuit: event.target.value})}
        >
        </textarea>
                </div>
            </div>

            <div className="row mb-2 pe-3">
                <div className="col-10"></div>
                <div className="col-2 btn btn-primary rounded-pill"
                     onClick={() => createTuit(dispatch, newTuit)}
                >
                    Tuit
                </div>
            </div>
        </>
    );
};

export default WhatsHappening;