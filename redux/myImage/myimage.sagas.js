import { call, put, select } from 'redux-saga/effects';
import axios from "axios";
import MyImageActions from "../myImage/myimage.redux";

const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;
const getId = (state) => state.user.id;



export function* myImage({nameUrl}) {

    let client = yield select(getClient);
    let uid = yield select(getUid);
    let accessToken = yield select(getAccessToken);
    let expiry = yield select(getExpiry);
    let id = yield select(getId);


    const url = new FormData();
    // avatar.append('avatar', );
    url.append("url", {
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
        yield put(MyImageActions.imageLoading(true));
        const response = yield call(axios.post, `/v1/photos`, url);
        if (response.status === 200) {
            console.log(response.data);
            yield put(MyImageActions.imageSuccess({
                ...response.data.data,
            }));
        }
        yield put(MyImageActions.imageLoading(false));
    } catch (error) {
        yield put(MyImageActions.imageFailure('Something went wrong!'));
    }
}
