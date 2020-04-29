import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import {login, register, update, UserTypes} from '../redux/user';

export default function* rootSaga() {
    try {
        // User Sagas
        yield all([takeEvery(UserTypes.LOGIN, login)]);
        yield all([takeLatest(UserTypes.REGISTER, register)]);
        yield all([takeLatest(UserTypes.UPDATE, update)]);
    } catch (err) {
        console.log(err);
    }
}
