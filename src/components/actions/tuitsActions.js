import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
    tuit = {
        ...tuit,
        postedBy: {username: 'Elon Musk'},
        handle: 'elonmusk',
        liked: false,
        disliked: false,
        logo_image: '/images/elon_musk_icon.jpeg',
        stats: {
            comments: 0,
            retuits: 0,
            likes: 0,
            dislikes: 0
        }
    };
    const newTuit = await service.createTuit(tuit);
    dispatch({
        type: CREATE_TUIT,
        newTuit
    });
};
export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tuits
    });
};
export const updateTuit = async (dispatch, tuit) => {
    await service.updateTuit(tuit);
    dispatch({
        type: UPDATE_TUIT,
        tuit
    });
};
export const deleteTuit = async (dispatch, tuit) => {
    await service.deleteTuit(tuit);
    dispatch({
        type: DELETE_TUIT,
        tuit
    });

};