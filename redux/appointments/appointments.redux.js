import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingAppointment: ['value'],
    fetchSuccessAppointment: ['data'],
    fetchFailedAppointment: ['error'],
    createAppointment: ['photographer_id','user_id','starting_time', 'appointment_status'],

    loadingAppointmentsForCurrentUser: ['value'],
    fetchSuccessAppointmentsForCurrentUser: ['data'],
    fetchFailedAppointmentsForCurrentUser: ['error'],
    getAppointmentsForCurrentUser: ['photographer_id']
});


export const AppointmentTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    myAppointments: []
};

export const appointmentReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_APPOINTMENT]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_APPOINTMENT]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_APPOINTMENT]: (state, { data }) => ({ ...state, error: data }),

    [Types.LOADING_APPOINTMENTS_FOR_CURRENT_USER]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_APPOINTMENTS_FOR_CURRENT_USER]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_APPOINTMENTS_FOR_CURRENT_USER]: (state, { data }) => ({ ...state, error: data }),
});
