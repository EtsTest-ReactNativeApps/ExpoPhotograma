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
            const id = response.data.data.id;
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
const getId = (state) => state.user.id;



export function* update({nameUrl}) {

    let client = yield select(getClient);
    let uid = yield select(getUid);
    let accessToken = yield select(getAccessToken);
    let expiry = yield select(getExpiry);
    let id = yield select(getId);


    const avatar = new FormData();
    // avatar.append('avatar', );
    avatar.append("avatar", {
            uri: nameUrl,
            type: 'image/jpg',
            name: nameUrl
        }, nameUrl);

    const token = 'Bearer';
    axios.defaults.headers.common['expiry'] = expiry;
    axios.defaults.headers.common['token-type'] = token;
    axios.defaults.headers.common['access-token'] = accessToken;
    axios.defaults.headers.common['uid'] = uid;
    axios.defaults.headers.common['client'] = client;
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';


    try {
        yield put(UserActions.updateLoading(true));
        const response = yield call(axios.put, `/v1/users/${id}`, avatar);
        if (response.status === 200) {
            console.log(response.data);
            const avatar = response.data.data.avatar.url;
            yield put(UserActions.updateSuccess({
                ...response.data.data,
                avatar: avatar,
            }));
        }
        yield put(UserActions.updateLoading(false));
    } catch (error) {
        yield put(UserActions.updateFailure('Something went wrong!'));
    }
}


export function* edit({name, phone}) {

    let client = yield select(getClient);
    let uid = yield select(getUid);
    let accessToken = yield select(getAccessToken);
    let expiry = yield select(getExpiry);
    let id = yield select(getId);


    const token = 'Bearer';
    axios.defaults.headers.common['expiry'] = expiry;
    axios.defaults.headers.common['token-type'] = token;
    axios.defaults.headers.common['access-token'] = accessToken;
    axios.defaults.headers.common['uid'] = uid;
    axios.defaults.headers.common['client'] = client;

    try {
        yield put(UserActions.editLoading(true));
        const response = yield call(axios.put, `/v1/users/${id}`, {name, phone});
        if (response.status === 200) {
            console.log(response.data);
            yield put(UserActions.editSuccess({
                ...response.data.data,
            }));
        }
        yield put(UserActions.editLoading(false));
    } catch (error) {
        yield put(UserActions.editFailure('Something went wrong!'));
    }
}


export function* info({}) {

    let client = yield select(getClient);
    let uid = yield select(getUid);
    let accessToken = yield select(getAccessToken);
    let expiry = yield select(getExpiry);
    let id = yield select(getId);


    const token = 'Bearer';
    axios.defaults.headers.common['expiry'] = expiry;
    axios.defaults.headers.common['token-type'] = token;
    axios.defaults.headers.common['access-token'] = accessToken;
    axios.defaults.headers.common['uid'] = uid;
    axios.defaults.headers.common['client'] = client;

    try {
        yield put(UserActions.infoLoading(true));
        const response = yield call(axios.get, `/v1/demo/user_photographer`);
        if (response.status === 200) {
            console.log(response.data);
            const photographerInfo = response.data.photographer;
            const photographerAddress = response.data.my_address;
            yield put(UserActions.infoSuccess({
                ...response.data.data,
                photographerInfo: photographerInfo,
                photographerAddress: photographerAddress
            }));
        }
        yield put(UserActions.infoLoading(false));
    } catch (error) {
        yield put(UserActions.infoFailure('Something went wrong!'));
    }
}


export function* logout() {
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

    try {
        yield put(UserActions.logoutLoading(true));
        const response = yield call(axios.delete, '/v1/auth/sign_out.json');
        if (response.status === 200) {
            console.log("DELETE" + response.data.success);

            yield put(UserActions.logoutSuccess());

        }
        yield put(UserActions.logoutLoading(false));
    } catch (error) {
        yield put(UserActions.logoutFailure('Could not log out!'));
    }
}
