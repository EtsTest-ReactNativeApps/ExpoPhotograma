import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loading: ['value'],
    fetchSuccess: ['data'],
    fetchFailed: ['error'],
    photos: [],
});

export const PhotosTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objects: []
};

export const photosReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED]: (state, { data }) => ({ ...state, error: data }),
});
