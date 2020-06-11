import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import {edit, info, login, register, update, UserTypes} from '../redux/user';
import {photos, photosByPhotographer, PhotosTypes} from "../redux/photos";
import {photographersByCity, PhotographersTypes} from "../redux/photographers";
import {myImage, MyImageTypes} from "../redux/myImage";
import {editPhotographer, PhotographerTypes} from "../redux/photographer";
import {createAppointment, AppointmentTypes} from "../redux/appointments";
import {createHashtag, getHashtagsForPhotographer, HashtagTypes} from "../redux/hashtags";
import {getAppointmentsForCurrentUser} from "../redux/appointments/appointments.sagas";
import {createLike,deleteLike, LikeTypes} from "../redux/likes";
import {getSavedForUser, SavedTypes} from "../redux/saved";

export default function* rootSaga() {
    try {
        // User Sagas
        yield all([takeEvery(UserTypes.LOGIN, login)]);
        yield all([takeLatest(UserTypes.REGISTER, register)]);
        yield all([takeLatest(UserTypes.UPDATE, update)]);
        yield all([takeLatest(UserTypes.EDIT, edit)]);
        yield all([takeEvery(UserTypes.INFO, info)]);
        yield all([takeEvery(PhotosTypes.PHOTOS, photos)]);
        yield all([takeEvery(PhotosTypes.PHOTOS_BY_PHOTOGRAPHER, photosByPhotographer)]);
        yield all([takeEvery(PhotographersTypes.PHOTOGRAPHERS_BY_CITY, photographersByCity)]);
        yield all([takeLatest(MyImageTypes.MY_IMAGE, myImage)]);
        yield all([takeEvery(PhotographerTypes.EDIT_PHOTOGRAPHER, editPhotographer)]);
        yield all([takeEvery(AppointmentTypes.CREATE_APPOINTMENT, createAppointment)]);
        yield all([takeEvery(AppointmentTypes.GET_APPOINTMENTS_FOR_CURRENT_USER, getAppointmentsForCurrentUser)]);
        yield all([takeEvery(HashtagTypes.CREATE_HASHTAG, createHashtag)]);
        yield all([takeLatest(HashtagTypes.GET_HASHTAGS_FOR_PHOTOGRAPHER, getHashtagsForPhotographer)]);
        yield all([takeLatest(SavedTypes.GET_SAVED_FOR_USER, getSavedForUser)]);
        yield all([takeEvery(LikeTypes.CREATE_LIKE, createLike)]);
        yield all([takeEvery(LikeTypes.DELETE_LIKE, deleteLike)]);

    } catch (err) {
        console.log(err);
    }
}
