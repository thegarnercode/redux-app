import {createStore, combineReducers, applyMiddleware} from 'redux';
import movielistReducer from './reducers/movielistReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk];
const allReducers = combineReducers({movies: movielistReducer, users: userReducer});
const initialState = {
    users: [],
    movies: {name: "TERMINATOR 2"}
};
const store = createStore(allReducers, initialState, ( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;