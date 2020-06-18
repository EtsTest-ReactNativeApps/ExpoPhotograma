import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    // createLikeLoading: ['value'],
    createLikeSuccess: ['objectsLikes'],
    createLikeFailed: [],
    createLike: ['user_id'],

    // deleteLikeLoading: ['value'],
    deleteLikeSuccess: [],
    deleteLikeFailed: [],
    deleteLike: ['like_id'],

    // fetchLikesLoading: ['value'],
    fetchLikesSuccess: ['data'],
    fetchLikesFailed: [],
    fetchLikes: [],
    loading: ['value'],

});


export const LikeTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objectsLikes: [],
    data: []
};

export const likeReducer = createReducer(INITIAL_STATE, {
    //
    // [Types.CREATE_LIKE_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    // [Types.CREATE_LIKE_FAILED]: (state, { data }) => ({ ...state, error: data }),
    //
    // [Types.DELETE_LIKE_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    // [Types.DELETE_LIKE_SUCCESS]: (state, { data }) => ({ ...state, data }),
    // [Types.DELETE_LIKE_FAILED]: (state, { data }) => ({ ...state, error: data }),

    // [Types.FETCH_LIKES_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.CREATE_LIKE_SUCCESS]: (state, { objectsLikes }) => ({ ...state, objectsLikes }),

    [Types.FETCH_LIKES_SUCCESS]: (state, { data }) => ({ ...state, data }),
    // [Types.FETCH_LIKES_FAILED]: (state, { data }) => ({ ...state, error: data }),

});
