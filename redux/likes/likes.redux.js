import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingLike: ['value'],
    fetchSuccessLike: ['data'],
    fetchFailedLike: ['error'],
    createLike: ['user_id'],

    loadingDeleteLike: ['value'],
    fetchSuccessDeleteLike: ['data'],
    fetchFailedDeleteLike: ['error'],
    deleteLike: ['like_id'],

});


export const LikeTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objectsLikes: [],
};

export const likeReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_LIKE]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_LIKE]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_LIKE]: (state, { data }) => ({ ...state, error: data }),

    [Types.LOADING_DELETE_LIKE]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_DELETE_LIKE]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_DELETE_LIKE]: (state, { data }) => ({ ...state, error: data }),
});
