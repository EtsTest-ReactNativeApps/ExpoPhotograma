import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loading: ['value'],
    fetchSuccess: ['data'],
    fetchFailed: ['error'],
    photographersByCity: ['city'],
});

export const PhotographersTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objects: []
};

export const photographersReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED]: (state, { data }) => ({ ...state, error: data }),
});
