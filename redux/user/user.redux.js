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
    update: ['nameUrl'],

    editLoading: ['value'],
    editSuccess: ['data'],
    editFailure: ['data'],
    edit: ['name', 'phone'],

    infoLoading: ['value'],
    infoSuccess: ['data'],
    infoFailure: ['error'],
    info: [],


    logoutLoading: ['value'],
    logoutSuccess: [],
    logoutFailure: [],
    logout: [],

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
    expiry: null,

    role: null,
    photographerInfo: [],
    photographerAddress: [],
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

    [Types.EDIT_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.EDIT_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.EDIT_FAILURE]: (state, { data }) => ({ ...state, error: data }),


    [Types.INFO_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.INFO_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.INFO_FAILURE]: (state, { data }) => ({ ...state, error: data }),

    [Types.LOGOUT_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.LOGOUT_SUCCESS]: state => ({...state, loggedIn: false }),
    [Types.LOGOUT_FAILURE]: (state, { data }) => ({ ...state, error: data }),
});
