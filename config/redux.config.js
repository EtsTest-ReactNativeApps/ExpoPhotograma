import { combineReducers } from 'redux';

import { userReducer } from '../redux/user';
import { photosReducer } from '../redux/photos';


export default combineReducers({
    user: userReducer,
    photos: photosReducer
});
