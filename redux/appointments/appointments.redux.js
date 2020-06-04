import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadingAppointment: ['value'],
    fetchSuccessAppointment: ['data'],
    fetchFailedAppointment: ['error'],
    createAppointment: ['photographer_id','owner_id','starting_time', 'appointment_status']
});


export const AppointmentTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false
};

export const appointmentReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING_APPOINTMENT]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_SUCCESS_APPOINTMENT]: (state, { data }) => ({ ...state, ...data }),
    [Types.FETCH_FAILED_APPOINTMENT]: (state, { data }) => ({ ...state, error: data }),
});
