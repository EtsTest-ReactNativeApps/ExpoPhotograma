import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import PhotosActions from './photos.redux';


const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;
const getId = (state) => state.user.id;


export function* photos() {
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
        yield put(PhotosActions.loading(true));
        const response = yield call(axios.get, `/v1/users/2/photographers/3/photos`);
        if (response.status === 200) {
            console.log(response.data);
            const objects = response.data.data.objects;

            yield put(PhotosActions.fetchSuccess( {...response.data.data, objects:objects} ));
        }
        yield put(PhotosActions.loading(false));
    } catch (error) {
        yield put(PhotosActions.loading(false));
        yield put(PhotosActions.fetchFailed('BAD'));
    }
}