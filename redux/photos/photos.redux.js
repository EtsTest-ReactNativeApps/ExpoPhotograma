import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingPhoto: ['value'],
    fetchSuccessPhoto: ['data'],
    fetchFailedPhoto: ['error'],
    photos: [],
});

export const PhotosTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objectsPhoto: []
};

export const photosReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_PHOTO]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_PHOTO]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_PHOTO]: (state, { data }) => ({ ...state, error: data }),
});
