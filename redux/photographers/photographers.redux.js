import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingPhotogr: ['value'],
    fetchSuccessPhotogr: ['data'],
    fetchFailedPhotogr: ['error'],
    photographersByCity: ['city'],
});

export const PhotographersTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false
};

export const photographersReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_PHOTOGR]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_PHOTOGR]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_PHOTOGR]: (state, { data }) => ({ ...state, error: data }),
});
