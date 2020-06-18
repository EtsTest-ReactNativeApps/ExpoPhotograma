import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingPhotographer: ['value'],
    fetchSuccessPhotographer: ['data'],
    fetchFailedPhotographer: ['error'],
    editPhotographer: ['description','secondDescription','cameraDescription'],

    createLoading: ['value'],
    createSuccess: [],
    createFailure: ['data'],
    createPhotographer: ['description','secondDescription','cameraDescription', 'rating', 'price', 'city']
});


export const PhotographerTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    created: false
};

export const photographerReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_PHOTOGRAPHER]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_PHOTOGRAPHER]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_PHOTOGRAPHER]: (state, { data }) => ({ ...state, error: data }),

    [Types.CREATE_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.CREATE_SUCCESS]: state => ({ ...state, created: true }),
    [Types.CREATE_FAILURE]: (state, { data }) => ({ ...state, error: data }),
});
