import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import UserActions from './user.redux';

export function* login({ email, password }) {
    try {
        yield put(UserActions.loginLoading(true));
        const response = yield call(axios.post, '/v1/auth/sign_in.json',
            { email, password });
        if (response.status === 200) {
            const uid = response.headers['uid'];
            const client = response.headers['client'];
            const accessToken = response.headers['access-token'];
            const expiry = response.headers['expiry'];
            console.log(response.data);
            yield put(UserActions.loginSuccess({ ...response.data,
                loggedIn: true,
                uid: uid,
                client: client,
                accessToken: accessToken,
                expiry: expiry,
            }));
        }
        yield put(UserActions.loginLoading(false));
    } catch (error) {
        yield put(UserActions.loginError('Invalid username or password!'));
    }
}


export function* register({ email, password, name, username, phone }) {
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
