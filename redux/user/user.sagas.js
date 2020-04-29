import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import UserActions from './user.redux';


export function* login({email, password}) {
    try {
        yield put(UserActions.loginLoading(true));
        const response = yield call(axios.post, '/v1/auth/sign_in.json',
            {email, password});
        if (response.status === 200) {
            const uid = response.headers['uid'];
            const client = response.headers['client'];
            const accessToken = response.headers['access-token'];
            const expiry = response.headers['expiry'];
            const avatar = response.data.data.avatar.url;
            const name = response.data.data.name;
            const username = response.data.data.username;
            const phone = response.data.data.phone;
            console.log(response.data);

            yield put(UserActions.loginSuccess({
                ...response.data,
                loggedIn: true,
                uid: uid,
                client: client,
                accessToken: accessToken,
                expiry: expiry,
                avatar: avatar,
                name: name,
                username: username,
                phone: phone
            }));

        }
        yield put(UserActions.loginLoading(false));
    } catch (error) {
        yield put(UserActions.loginError('Invalid username or password!'));
    }
}


export function* register({ email, password, name, username, phone}) {
    try {
        yield put(UserActions.registerLoading(true));
        const response = yield call(axios.post, '/v1/auth.json', {
            email,
            password,
            name,
            username,
            phone
        });
        if (response.status === 200) {
            yield put(UserActions.registerSuccess());
        }
        yield put(UserActions.registerLoading(false));
    } catch (error) {
        yield put(UserActions.registerFailure('Email address already in use!'));
    }
}


const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;



export function* update({name, username, phone, avatar}) {

    let client = yield select(getClient);
    let uid = yield select(getUid);
    let accessToken = yield select(getAccessToken);
    let expiry = yield select(getExpiry);

    const token = 'Bearer';
    axios.defaults.headers.common['expiry'] = expiry;
    axios.defaults.headers.common['token-type'] = token;
    axios.defaults.headers.common['access-token'] = accessToken;
    axios.defaults.headers.common['uid'] = uid;
    axios.defaults.headers.common['client'] = client;
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';



    try {
        yield put(UserActions.updateLoading(true));
        const response = yield call(axios.put, '/v1/users/1', {name, username, phone, avatar});
        if (response.status === 200) {
            console.log(response.data);
            const avatar = response.data.data.avatar.url;
            const name = response.data.data.name;
            const username = response.data.data.username;
            const phone = response.data.data.phone;
            yield put(UserActions.updateSuccess({
                ...response.data.data,
                avatar: avatar,
                name: name,
                phone: phone,
                username: username,
            }));
        }
        yield put(UserActions.updateLoading(false));
    } catch (error) {
        yield put(UserActions.updateFailure('Something went wrong!'));
    }
}
