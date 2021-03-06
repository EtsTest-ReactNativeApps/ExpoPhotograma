import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import {edit, info, login, logout, register, update, UserTypes} from '../redux/user';
import {photos, photosByPhotographer, PhotosTypes} from "../redux/photos";
import {photographersByCity, PhotographersTypes} from "../redux/photographers";
import {myImage, MyImageTypes} from "../redux/myImage";
import {createPhotographer, editPhotographer, PhotographerTypes} from "../redux/photographer";
import {createAppointment, AppointmentTypes} from "../redux/appointments";
import {createHashtag, getHashtagsForPhotographer,getHashtagsForMyProfile, HashtagTypes} from "../redux/hashtags";
import {getAppointmentsForCurrentUser} from "../redux/appointments/appointments.sagas";
import {createLike, deleteLike, fetchLikes, LikeTypes} from "../redux/likes";

export default function* rootSaga() {
    try {
        // USER
        yield all([takeEvery(UserTypes.LOGIN, login)]);
        yield all([takeLatest(UserTypes.REGISTER, register)]);
        //LOGOUT
        yield all([takeEvery(UserTypes.LOGOUT, logout)]);

        yield all([takeLatest(UserTypes.UPDATE, update)]);
        yield all([takeEvery(UserTypes.EDIT, edit)]);
        yield all([takeEvery(UserTypes.INFO, info)]);

        yield all([takeLatest(HashtagTypes.GET_HASHTAGS_FOR_MY_PROFILE, getHashtagsForMyProfile)]);

        //PHOTOGRAPHERS BY CITY
        yield all([takeLatest(PhotographersTypes.PHOTOGRAPHERS_BY_CITY, photographersByCity)]);


        //PHOTOS
        yield all([takeLatest(PhotosTypes.PHOTOS, photos)]);
        // yield all([takeLatest(PhotosTypes.PHOTOS_BY_PHOTOGRAPHER, photosByPhotographer)]);

        //MY TYPES
        yield all([takeLatest(MyImageTypes.MY_IMAGE, myImage)]);

        //PHOTOGRAPHER
        yield all([takeEvery(PhotographerTypes.EDIT_PHOTOGRAPHER, editPhotographer)]);
        yield all([takeEvery(PhotographerTypes.CREATE_PHOTOGRAPHER, createPhotographer)]);

        //APPOINTMENTS
        yield all([takeEvery(AppointmentTypes.CREATE_APPOINTMENT, createAppointment)]);
        yield all([takeEvery(AppointmentTypes.GET_APPOINTMENTS_FOR_CURRENT_USER, getAppointmentsForCurrentUser)]);

        //HASHTAGS
        yield all([takeEvery(HashtagTypes.CREATE_HASHTAG, createHashtag)]);
        yield all([takeLatest(HashtagTypes.GET_HASHTAGS_FOR_PHOTOGRAPHER, getHashtagsForPhotographer)]);

        //LIKES
        yield all([takeLatest(LikeTypes.FETCH_LIKES, fetchLikes)]);
        yield all([takeLatest(LikeTypes.CREATE_LIKE, createLike)]);
        yield all([takeLatest(LikeTypes.DELETE_LIKE, deleteLike)]);

    } catch (err) {
        console.log(err);
    }
}
