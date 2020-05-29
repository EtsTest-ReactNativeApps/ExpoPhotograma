import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    imageLoading: ['value'],
    imageSuccess: ['data'],
    imageFailure: ['data'],
    myImage: ['nameUrl'],

});

export const MyImageTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
};

export const myImageReducer = createReducer(INITIAL_STATE, {

    [Types.IMAGE_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.IMAGE_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.IMAGE_FAILURE]: (state, { data }) => ({ ...state, error: data }),


});
