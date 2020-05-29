import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingPhotographer: ['value'],
    fetchSuccessPhotographer: ['data'],
    fetchFailedPhotographer: ['error'],
    editPhotographer: ['photographer_id, description','secondDescription','cameraDescription']
});


export const PhotographerTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false
};

export const photographerReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_PHOTOGRAPHER]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_PHOTOGRAPHER]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_PHOTOGRAPHER]: (state, { data }) => ({ ...state, error: data }),
});
