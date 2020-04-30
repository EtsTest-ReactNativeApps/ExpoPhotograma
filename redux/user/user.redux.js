import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loginLoading: ['value'],
    loginSuccess: ['data'],
    loginError: ['data'],
    login: ['email', 'password'],

    registerLoading: ['value'],
    registerSuccess: [],
    registerFailure: ['data'],
    register: ['email', 'password', 'name', 'username', 'phone'],

    updateLoading: ['value'],
    updateSuccess: ['data'],
    updateFailure: ['data'],
    update: ['name', 'username', 'phone', 'avatar'],

});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    error: null,
    loggedIn: false,
    registered: false,

    avatar: null,
    name:null,
    username:null,
    phone:null,
    id:null,

    tokenType: 'Bearer',
    client: null,
    accessToken: null,
    uid: null,
    expiry: null
};

export const userReducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.LOGIN_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.LOGIN_ERROR]: (state, { data }) => ({ ...state, error: data }),


    [Types.REGISTER_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.REGISTER_SUCCESS]: state => ({ ...state, registered: true }),
    [Types.REGISTER_FAILURE]: (state, { data }) => ({ ...state, error: data }),

    [Types.UPDATE_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.UPDATE_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.UPDATE_FAILURE]: (state, { data }) => ({ ...state, error: data }),
});
