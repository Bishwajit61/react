import { combineReducers } from "redux";
import firstReducer from "./reducers/firstReducer";
import secondReducer from "./reducers/secondreducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    first:firstReducer,
    second:secondReducer,
    form:formReducer,
})