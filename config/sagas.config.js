import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import {edit, info, login, register, update, UserTypes} from '../redux/user';
import {photos, PhotosTypes} from "../redux/photos";
import {photographersByCity, PhotographersTypes} from "../redux/photographers";

export default function* rootSaga() {
    try {
        // User Sagas
        yield all([takeEvery(UserTypes.LOGIN, login)]);
        yield all([takeLatest(UserTypes.REGISTER, register)]);
        yield all([takeLatest(UserTypes.UPDATE, update)]);
        yield all([takeLatest(UserTypes.EDIT, edit)]);
        yield all([takeLatest(UserTypes.INFO, info)]);
        yield all([takeLatest(PhotosTypes.PHOTOS, photos)]);
        yield all([takeLatest(PhotographersTypes.PHOTOGRAPHERS_BY_CITY, photographersByCity)]);
    } catch (err) {
        console.log(err);
    }
}
