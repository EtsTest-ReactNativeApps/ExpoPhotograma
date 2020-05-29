import { combineReducers } from 'redux';

import { userReducer } from '../redux/user';
import { photosReducer } from '../redux/photos';
import {photographersReducer} from "../redux/photographers";
import {myImageReducer} from "../redux/myImage/myimage.redux";
import {photographerReducer} from "../redux/photographer/photographer.redux";

export default combineReducers({
    user: userReducer,
    photos: photosReducer,
    photographers: photographersReducer,
    photographerReducer: photographerReducer,
    myImage: myImageReducer
});
