import { combineReducers } from 'redux';

import { userReducer } from '../redux/user';
import { photosReducer } from '../redux/photos';
import {photographersReducer} from "../redux/photographers";


export default combineReducers({
    user: userReducer,
    photos: photosReducer,
    photographers: photographersReducer
});
