import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import PhotographerActions from './photographer.redux';


const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;

export function* editPhotographer({ description, secondDescription, cameraDescription}) {
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
        yield put(PhotographerActions.loadingPhotographer(true));
        const response = yield call(axios.put, `/v1/photographers/1`,
            { description, secondDescription, cameraDescription});
        if (response.status === 200) {
            console.log(response.data);
            yield put(PhotographerActions.fetchSuccessPhotographer( {...response.data.data} ));
        }
        yield put(PhotographerActions.loadingPhotographer(false));
    } catch (error) {
        yield put(PhotographerActions.loadingPhotographer(false));
        yield put(PhotographerActions.fetchFailedPhotographer('BAD'));
    }
}


export function* createPhotographer({description, secondDescription, cameraDescription, rating, price, city}) {
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
        yield put(PhotographerActions.createLoading(true));
        const response = yield call(axios.post, `/v1/photographers`,
            {description, secondDescription, cameraDescription, rating, price, city});
        if (response.status === 200) {
            console.log(response.data);
            yield put(PhotographerActions.createSuccess());
        }
        yield put(PhotographerActions.createLoading(false));
    } catch (error) {
        yield put(PhotographerActions.createLoading(false));
        yield put(PhotographerActions.createFailure('BAD'));
    }
}
