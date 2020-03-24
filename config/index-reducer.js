import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import user from './user/reducer'

const IndexReducer = combineReducers({
    user,
    form,
});

export default IndexReducer
