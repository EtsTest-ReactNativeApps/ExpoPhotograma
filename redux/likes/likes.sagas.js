import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import LikeActions from './likes.redux';


const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;


export function* createLike({ user_id }) {
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
        yield put(LikeActions.loadingLike(true));
        const response = yield call(axios.post, `/v1/likes`,
            { user_id });
        if (response.status === 200) {
            console.log(response.data);
            yield put(LikeActions.fetchSuccessLike( {...response.data.data} ));
        }
        yield put(LikeActions.loadingLike(false));
    } catch (error) {
        yield put(LikeActions.loadingLike(false));
        yield put(LikeActions.fetchFailedLike('BAD'));
    }
}


export function* deleteLike({ like_id }) {
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
        yield put(LikeActions.loadingDeleteLike(true));
        const response = yield call(axios.delete, `/v1/likes/${like_id}`,
            { user_id });
        if (response.status === 200) {
            console.log(response.data);
            yield put(LikeActions.fetchSuccessDeleteLike( {...response.data.data} ));
        }
        yield put(LikeActions.loadingDeleteLike(false));
    } catch (error) {
        yield put(LikeActions.loadingDeleteLike(false));
        yield put(LikeActions.fetchFailedDeleteLike('BAD'));
    }
}


