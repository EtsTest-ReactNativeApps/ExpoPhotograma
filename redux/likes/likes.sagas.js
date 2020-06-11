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
        yield put(LikeActions.loading(true));
        const response = yield call(axios.post, `/v1/likes`,
            { user_id });
        if (response.status === 200) {
            const objectsLikes = response.data;
            console.log(response.data);
            yield put(LikeActions.createLikeSuccess({  objectsLikes: objectsLikes }));
        }
        yield put(LikeActions.loading(false));
    } catch (error) {
        yield put(LikeActions.loading(false));
        yield put(LikeActions.createLikeFailed());
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
        yield put(LikeActions.loading(true));
        const response = yield call(axios.delete, `/v1/likes/${like_id}`,
            { user_id });
        if (response.status === 200) {
            console.log(response.data);
            yield put(LikeActions.deleteLikeSuccess());
        }
        yield put(LikeActions.loading(false));
    } catch (error) {
        yield put(LikeActions.loading(false));
        yield put(LikeActions.deleteLikeFailed());
    }
}


export function* fetchLikes() {
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
        yield put(LikeActions.loading(true));
        const response = yield call(axios.get, `/v1/likes`);
        if (response.status === 200) {
            const objectsLikes = response.data.data;
            console.log("MY LIKES" + response.data.data);
            yield put(LikeActions.fetchLikesSuccess({ data: response.data.data }));
        }
        yield put(LikeActions.loading(false));
    } catch (error) {
        yield put(LikeActions.loading(false));
        yield put(LikeActions.fetchLikesFailed());
    }
}


