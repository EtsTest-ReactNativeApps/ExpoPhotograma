import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import SavedActions from "./saved.redux";

const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;



export function* getSavedForUser() {
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
        yield put(SavedActions.loadingSavedForUser(true));
        const response = yield call(axios.get, `/v1/likes`);
        if (response.status === 200) {
            console.log(response.data);
            const objectsSaved = response.data.data;
            console.log("MY DATA" + objectsSaved);

            yield put(SavedActions.fetchSuccessSavedForUser( {...response.data.data, objectsSaved: objectsSaved} ));
        }
        yield put(SavedActions.loadingSavedForUser(false));
    } catch (error) {
        yield put(SavedActions.loadingSavedForUser(false));
        yield put(SavedActions.fetchFailedSavedForUser('BAD'));
    }
}
