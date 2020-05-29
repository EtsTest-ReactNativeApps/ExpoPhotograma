import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingPhoto: ['value'],
    fetchSuccessPhoto: ['data'],
    fetchFailedPhoto: ['error'],
    photos: [],

    loadingPhotoByPhotographer: ['value'],
    fetchSuccessPhotoByPhotographer: ['data'],
    fetchFailedPhotoByPhotographer: ['error'],
    photosByPhotographer: ['photographer_id'],


});

export const PhotosTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objectsPhoto: [],
    photosFromPhotographer: []
};

export const photosReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_PHOTO]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_PHOTO]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_PHOTO]: (state, { data }) => ({ ...state, error: data }),

    [Types.LOADING_PHOTO_BY_PHOTOGRAPHER]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_PHOTO_BY_PHOTOGRAPHER]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_PHOTO_BY_PHOTOGRAPHER]: (state, { data }) => ({ ...state, error: data }),
});
