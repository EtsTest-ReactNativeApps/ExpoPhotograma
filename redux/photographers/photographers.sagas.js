import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import PhotographersActions from './photographers.redux';


const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;

export function* photographersByCity({city}) {
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
        yield put(PhotographersActions.loading(true));
        const response = yield call(axios.get, `/v1/demo/get_photographers_for_city?city=${city}`);
        if (response.status === 200) {
            console.log(response.data);
            const objects = response.data.data.objects;

            yield put(PhotographersActions.fetchSuccess( {...response.data.data, objects:objects} ));
        }
        yield put(PhotographersActions.loading(false));
    } catch (error) {
        yield put(PhotographersActions.loading(false));
        yield put(PhotographersActions.fetchFailed('BAD'));
    }
}
