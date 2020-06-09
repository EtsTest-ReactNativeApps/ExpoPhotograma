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
        yield put(PhotographersActions.loadingPhotogr(true));
        const response = yield call(axios.get, `/v1/demo/get_photographers_for_city?city=${city}`);
        if (response.status === 200) {
            console.log(response.data);
            yield put(PhotographersActions.fetchSuccessPhotogr( {...response.data.data} ));
        }
        yield put(PhotographersActions.loadingPhotogr(false));
    } catch (error) {
        yield put(PhotographersActions.loadingPhotogr(false));
        yield put(PhotographersActions.fetchFailedPhotogr('BAD'));
    }
}
