import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({

    loadingSavedForUser: ['value'],
    fetchSuccessSavedForUser: ['data'],
    fetchFailedSavedForUser: ['error'],
    getSavedForUser: [],

});


export const SavedTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objectsSaved: [],
};

export const savedReducer = createReducer(INITIAL_STATE, {

    [Types.LOADING_SAVED_FOR_USER]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_SAVED_FOR_USER]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_SAVED_FOR_USER]: (state, { data }) => ({ ...state, error: data }),

});
