import { all, takeEvery } from 'redux-saga/effects';

import { login, UserTypes } from '../redux/user';

export default function* rootSaga() {
    try {
        yield all([takeEvery(UserTypes.LOGIN, login)]);
    } catch (err) {
        console.log(err);
    }
}
