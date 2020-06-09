import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import AppointmentActions from './appointments.redux';


const getClient = (state) => state.user.client;
const getUid = (state) => state.user.uid;
const getAccessToken = (state) => state.user.accessToken;
const getExpiry = (state) => state.user.expiry;

export function* createAppointment({ photographer_id, owner_id, starting_time, appointment_status}) {
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
        yield put(AppointmentActions.loadingAppointment(true));
        const response = yield call(axios.post, `/v1/appointments`,
            {  photographer_id, owner_id, starting_time, appointment_status});
        if (response.status === 200) {
            console.log(response.data);
            yield put(AppointmentActions.fetchSuccessAppointment( {...response.data.data} ));
        }
        yield put(AppointmentActions.loadingAppointment(false));
    } catch (error) {
        yield put(AppointmentActions.loadingAppointment(false));
        yield put(AppointmentActions.fetchFailedAppointment('BAD'));
    }
}



export function* getAppointmentsForCurrentUser({ photographer_id }) {
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
        yield put(AppointmentActions.loadingAppointment(true));
        const response = yield call(axios.get, `/v1/appointments?photographer_id=${photographer_id}`);
        if (response.status === 200) {
            console.log(response.data);
            const myAppointments = response.data.data;
            console.log("MY APPOINTMENTS" + myAppointments);
            yield put(AppointmentActions.fetchSuccessAppointmentsForCurrentUser( {...response.data.data, myAppointments: myAppointments} ));
        }
        yield put(AppointmentActions.loadingAppointmentsForCurrentUser(false));
    } catch (error) {
        yield put(AppointmentActions.loadingAppointmentsForCurrentUser(false));
        yield put(AppointmentActions.fetchFailedAppointmentsForCurrentUser('BAD'));
    }
}
