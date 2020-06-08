import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import HashtagActions from './hashtags.redux';
import PhotographersActions from "../photographers/photographers.redux";


const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;

export function* createHashtag({ style_id }) {
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
        yield put(HashtagActions.loadingHashtag(true));
        const response = yield call(axios.post, `/v1/hashtags`,
            { style_id });
        if (response.status === 200) {
            console.log(response.data);
            yield put(HashtagActions.fetchSuccessHashtag( {...response.data.data} ));
        }
        yield put(HashtagActions.loadingHashtag(false));
    } catch (error) {
        yield put(HashtagActions.loadingHashtag(false));
        yield put(HashtagActions.fetchFailedHashtag('BAD'));
    }
}



export function* getHashtagsForPhotographer({photographer_id}) {
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
        yield put(HashtagActions.loadingHashtagsForPhotographer(true));
        const response = yield call(axios.get, `/v1/hashtags?photographer_id=${photographer_id}`);
        if (response.status === 200) {
            console.log(response.data);
            const objects = response.data.data;
            console.log("MY DATA" + objects);

            yield put(HashtagActions.fetchSuccessHashtagsForPhotographer( {...response.data.data, objectsHashtags: objects} ));
        }
        yield put(HashtagActions.loadingHashtagsForPhotographer(false));
    } catch (error) {
        yield put(HashtagActions.loadingHashtagsForPhotographer(false));
        yield put(HashtagActions.fetchFailedHashtagsForPhotographer('BAD'));
    }
}
