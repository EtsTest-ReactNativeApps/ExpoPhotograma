import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingHashtag: ['value'],
    fetchSuccessHashtag: ['data'],
    fetchFailedHashtag: ['error'],
    createHashtag: ['style_id'],

    loadingHashtagsForPhotographer: ['value'],
    fetchSuccessHashtagsForPhotographer: ['data'],
    fetchFailedHashtagsForPhotographer: ['error'],
    getHashtagsForPhotographer: ['photographer_id']

});


export const HashtagTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    objectsHashtags: [],
};

export const hashtagReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_HASHTAG]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_HASHTAG]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_HASHTAG]: (state, { data }) => ({ ...state, error: data }),

    [Types.LOADING_HASHTAGS_FOR_PHOTOGRAPHER]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_HASHTAGS_FOR_PHOTOGRAPHER]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_HASHTAGS_FOR_PHOTOGRAPHER]: (state, { data }) => ({ ...state, error: data })
});
